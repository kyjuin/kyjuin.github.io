import assert from 'node:assert/strict';
import { before, after, afterEach, test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';

let server;
let App;
let dom;
let root;
let createRoot;
let captcha;
const realFetch = globalThis.fetch;

before(async () => {
  // Detect browser input events with a DOM present before loading ReactDOM.
  const bootstrap = new JSDOM('<!doctype html><html><body></body></html>');
  globalThis.window = bootstrap.window;
  globalThis.document = bootstrap.window.document;
  Object.defineProperty(globalThis, 'navigator', { value: bootstrap.window.navigator, configurable: true });
  ({ createRoot } = await import('react-dom/client'));
  bootstrap.window.close();
  server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
    logLevel: 'error',
    ssr: { noExternal: ['@hcaptcha/react-hcaptcha'] },
  });
  ({ default: App } = await server.ssrLoadModule('/src/App.jsx'));
});

after(async () => { await server?.close(); });
afterEach(async () => {
  if (root) await act(async () => root.unmount());
  root = null;
  dom?.window.close();
  globalThis.fetch = realFetch;
});

async function mount({ savedTheme, storageUnavailable = false } = {}) {
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'https://example.com/portfolio/',
    runScripts: 'outside-only',
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.localStorage = dom.window.localStorage;
  globalThis.MutationObserver = dom.window.MutationObserver;
  globalThis.FormData = dom.window.FormData;
  globalThis.fetch = async () => { throw new Error('Unexpected external request in test'); };
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  // Simulate the external captcha API. Tests never contact or solve a real captcha.
  captcha = { widgets: new Map(), nextId: 1, token: '' };
  dom.window.hcaptcha = {
    render(element, options) {
      const id = String(captcha.nextId++);
      captcha.widgets.set(id, { element, options });
      return id;
    },
    reset() { captcha.token = ''; },
    remove(id) { captcha.widgets.delete(id); },
    getResponse() { return captcha.token; },
    getRespKey() { return 'mock-response-key'; },
  };
  if (savedTheme) localStorage.setItem('portfolio-theme', savedTheme);
  if (storageUnavailable) {
    Object.defineProperty(dom.window, 'localStorage', {
      get() { throw new Error('Storage unavailable'); },
    });
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get() { throw new Error('Storage unavailable'); },
      set(value) { Object.defineProperty(globalThis, 'localStorage', { value, writable: true, configurable: true }); },
    });
  }
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  dom.window.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
  // jsdom has no native modal implementation. These shims emulate only its
  // open/close events; keyboard focus trapping is provided by browsers.
  dom.window.HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  dom.window.HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
    this.dispatchEvent(new dom.window.Event('close'));
  };
  root = createRoot(document.getElementById('root'));
  await act(async () => root.render(createElement(App)));
}

const click = async (element) => {
  await act(async () => element.click());
};

test('preserves section order, project content, images, and accessible targets', async () => {
  await mount();
  assert.deepEqual([...document.querySelectorAll('main > section')].map(node => node.id),
    ['home', 'skills', 'experience', 'projects', 'contact']);
  assert.equal(document.querySelectorAll('.project-card').length, 4);
  assert.equal(document.querySelectorAll('.skills-grid .skill-card').length, 6);
  assert.equal(document.querySelectorAll('.experience-card').length, 3);
  assert.equal(document.querySelectorAll('.project-screenshots--exchange img').length, 3);
  assert.equal(document.querySelectorAll('.pos-flow button').length, 0);
  assert.match(document.querySelector('.frame-footer').textContent, /Built with ReactJS/);
  const ids = [...document.querySelectorAll('[id]')].map(node => node.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const node of document.querySelectorAll('[aria-controls], [aria-labelledby], [aria-describedby], label[for]')) {
    for (const attribute of ['aria-controls', 'aria-labelledby', 'aria-describedby', 'for']) {
      for (const id of (node.getAttribute(attribute) || '').split(' ').filter(Boolean)) {
        assert.ok(document.getElementById(id), `Missing accessible target: ${id}`);
      }
    }
  }
  assert.equal(document.querySelector('.contact-submit').disabled, false);
  assert.equal(document.querySelectorAll('form[action*="formsubmit"]').length, 0);
  assert.equal(document.querySelectorAll('.hero-socials a').length, 3);
});

const fillContact = () => {
  const values = {
    name: ' Jane Doe ', email: 'jane@example.com', subject: 'Project & collaboration?',
    message: 'Hello Yi Juin,\nI would like to discuss a project.',
  };
  const form = document.getElementById('contact-form');
  for (const [name, value] of Object.entries(values)) form.elements.namedItem(name).value = value;
  return { form, values };
};

const solveCaptcha = async () => {
  captcha.token = 'mock-captcha-token';
  const widget = [...captcha.widgets.values()].at(-1);
  assert.ok(widget, 'Captcha widget should be rendered');
  assert.equal(widget.options.sitekey, '50b2fe65-b00b-4b9e-ad62-3ba471098be2');
  await act(async () => widget.options.callback());
};

const submitContact = async (form) => {
  await act(async () => form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true })));
};

test('contact form blocks missing captcha, invalid email, and blank required fields', async () => {
  await mount();
  let requests = 0;
  globalThis.fetch = async () => { requests++; throw new Error('Unexpected submission'); };
  const { form } = fillContact();
  await submitContact(form);
  assert.match(document.querySelector('[role="alert"]').textContent, /complete the verification/);
  await solveCaptcha();
  form.elements.namedItem('email').value = 'not-an-email';
  await submitContact(form);
  assert.equal(requests, 0);
  form.elements.namedItem('email').value = 'jane@example.com';
  form.elements.namedItem('message').value = '   ';
  await submitContact(form);
  assert.match(document.querySelector('[role="alert"]').textContent, /complete all fields/);
  assert.equal(requests, 0);
});

test('contact form posts to Web3Forms once, waits for acceptance, then resets', async () => {
  await mount();
  const { form, values } = fillContact();
  await solveCaptcha();
  const requests = [];
  let complete;
  globalThis.fetch = (url, options) => {
    requests.push({ url, options });
    return new Promise(resolve => { complete = resolve; });
  };
  await submitContact(form);
  assert.equal(form.getAttribute('aria-busy'), 'true');
  assert.equal(document.querySelector('.contact-submit').disabled, true);
  assert.match(document.querySelector('.contact-submit').textContent, /Sending/);
  await submitContact(form);
  assert.equal(requests.length, 1);
  const request = requests[0];
  assert.equal(request.url, 'https://api.web3forms.com/submit');
  assert.equal(request.options.method, 'POST');
  assert.equal(request.options.credentials, 'omit');
  const payload = JSON.parse(request.options.body);
  assert.equal(payload.access_key, '8e641a03-a815-4ffb-a76f-473856cad469');
  assert.equal(payload.name, values.name.trim());
  assert.equal(payload.email, values.email);
  assert.equal(payload.subject, values.subject);
  assert.equal(payload.message, values.message);
  assert.equal(payload['h-captcha-response'], 'mock-captcha-token');
  await act(async () => complete({ ok: true, json: async () => ({ success: true }) }));
  assert.match(document.querySelector('[role="status"]').textContent, /message was submitted/);
  assert.equal(form.elements.namedItem('message').value, '');
  assert.equal(document.querySelector('.contact-submit').disabled, false);
  await submitContact(form);
  assert.equal(requests.length, 1);
});

for (const failure of ['network', 'quota', 'rejected', 'malformed', 'timeout']) {
  test(`contact form preserves the message and resets verification after ${failure} failure`, async () => {
    await mount();
    const { form, values } = fillContact();
    await solveCaptcha();
    let requests = 0;
    globalThis.fetch = async () => {
      requests++;
      if (failure === 'network') throw new Error('Offline');
      if (failure === 'timeout') throw Object.assign(new Error('Timed out'), { name: 'AbortError' });
      if (failure === 'malformed') return { ok: true, json: async () => { throw new Error('Invalid JSON'); } };
      return { ok: failure !== 'quota', json: async () => ({ success: false }) };
    };
    await submitContact(form);
    assert.equal(form.elements.namedItem('message').value, values.message);
    assert.match(document.querySelector('[role="alert"]').textContent, failure === 'timeout' ? /timed out/ : /could not be confirmed/);
    assert.equal(form.getAttribute('aria-busy'), 'false');
    assert.equal(document.querySelector('.contact-submit').disabled, false);
    await submitContact(form);
    assert.match(document.querySelector('[role="alert"]').textContent, /complete the verification/);
    assert.equal(requests, 1);
  });
}

test('captcha expiration and theme changes invalidate the previous verification', async () => {
  await mount();
  const { form } = fillContact();
  await solveCaptcha();
  await act(async () => [...captcha.widgets.values()].at(-1).options['expired-callback']());
  await submitContact(form);
  assert.match(document.querySelector('[role="alert"]').textContent, /complete the verification/);
  await solveCaptcha();
  await click(document.querySelector('.theme-toggle'));
  assert.equal([...captcha.widgets.values()].at(-1).options.theme, 'light');
  await submitContact(form);
  assert.match(document.querySelector('[role="alert"]').textContent, /complete the verification/);
});

test('restores saved theme and persists theme changes', async () => {
  await mount({ savedTheme: 'light' });
  const toggle = document.querySelector('.theme-toggle');
  assert.equal(document.documentElement.dataset.theme, 'light');
  assert.equal(toggle.getAttribute('aria-label'), 'Switch to dark mode');
  await click(toggle);
  assert.equal(document.documentElement.dataset.theme, 'dark');
  assert.equal(localStorage.getItem('portfolio-theme'), 'dark');
  await click(toggle);
  assert.equal(document.documentElement.dataset.theme, 'light');
});

test('theme still switches when local storage is unavailable', async () => {
  await mount({ storageUnavailable: true });
  await click(document.querySelector('.theme-toggle'));
  assert.equal(document.documentElement.dataset.theme, 'light');
});

test('all project dialogs open, reset scrolling, close, unlock, and restore focus', async () => {
  await mount();
  for (const opener of document.querySelectorAll('.project-open')) {
    const dialog = document.getElementById(opener.getAttribute('aria-controls'));
    for (const closeButton of dialog.querySelectorAll('button')) {
      dialog.scrollTop = 150;
      await click(opener);
      assert.ok(dialog.open);
      assert.equal(document.querySelectorAll('dialog[open]').length, 1);
      assert.equal(dialog.scrollTop, 0);
      assert.ok(document.documentElement.classList.contains('project-is-open'));
      await click(closeButton);
      assert.equal(dialog.open, false);
      assert.equal(document.documentElement.classList.contains('project-is-open'), false);
      assert.equal(document.activeElement, opener);
    }
    await click(opener);
    await act(async () => dialog.dispatchEvent(new dom.window.Event('cancel', { cancelable: true })));
    assert.equal(dialog.open, false);
    assert.equal(document.activeElement, opener);
  }
});

test('screenshots preview on the same page and close without closing or scrolling the project', async () => {
  await mount();
  for (const projectId of ['exchange-details', 'pos-details']) {
    await click(document.querySelector(`[aria-controls="${projectId}"]`));
    const project = document.getElementById(projectId);
    project.scrollTop = 700;
    const links = [...project.querySelectorAll('.project-screenshots a')];
    assert.equal(links.length, projectId === 'pos-details' ? 4 : 3);
    for (const link of links) {
      assert.equal(link.target, '');
      const previousURL = window.location.href;
      await click(link.querySelector('img'));
      const viewer = project.querySelector('.screenshot-viewer');
      assert.ok(viewer.open);
      assert.equal(viewer.querySelector('img').src, link.href);
      assert.equal(window.location.href, previousURL);
      await act(async () => viewer.dispatchEvent(new dom.window.Event('cancel', { cancelable: true, bubbles: true })));
      assert.equal(viewer.open, false);
      assert.ok(project.open);
      assert.equal(project.scrollTop, 700);
      assert.equal(document.activeElement, link);
    }
    await click(links[0]);
    await click(project.querySelector('.screenshot-viewer .project-close'));
    assert.equal(project.querySelector('.screenshot-viewer').open, false);
    assert.ok(project.open);
    await click(links[0]);
    await click(project.querySelector('.screenshot-viewer'));
    assert.equal(project.querySelector('.screenshot-viewer').open, false);
    assert.ok(project.open);
    await click(project.querySelector('.project-dialog-bar .project-close'));
  }
});

test('research project groups three prototypes and accurately credits planning and implementation', async () => {
  await mount();
  const opener = document.querySelector('[aria-controls="research-details"]');
  await click(opener);
  const dialog = document.getElementById('research-details');
  assert.ok(dialog.open);
  assert.equal(document.querySelectorAll('.project-open').length, 4);
  assert.equal(dialog.querySelectorAll('.research-app-card').length, 3);
  assert.equal(dialog.querySelectorAll('.research-prototype-link').length, 3);
  assert.equal(dialog.querySelectorAll('.research-contribution-grid article').length, 4);
  assert.match(dialog.querySelector('.research-credit').textContent, /intern developed the application code/);
  assert.match(dialog.querySelector('.research-credit').textContent, /C# for the backend with SQL database work managed through pgAdmin/);
  assert.match(dialog.querySelector('.project-facts').textContent, /Frontend stackReactJS · React Native · Expo/);
  assert.match(dialog.querySelector('.research-app-card').textContent, /React NativeExpoExpo RouterTypeScript tooling/);
  assert.equal(dialog.querySelectorAll('.research-app-stack').length, 3);
  const links = [...dialog.querySelectorAll('.research-prototype-link')];
  for (const [index, id] of ['K9kQtJhJK5aUWqssella82', 'PaxYYp9M6OKq8OLnCOt83F', 'cCdchjuZXIBwtXO6rxzCTY'].entries()) {
    assert.ok(links[index].href.startsWith('https://www.figma.com/make/' + id + '/'));
    assert.equal(links[index].target, '_blank');
    assert.ok(links[index].rel.includes('noopener'));
  }
  const apps = dialog.querySelector('.research-app-grid').textContent;
  assert.match(apps, /scheduled by medical officers/);
  assert.match(apps, /Caretaker facial|caretaker facial/);
  assert.doesNotMatch(apps, /Low \/ Medium \/ High/);
  assert.doesNotMatch(apps, /View medication records|View diagnosis results/);
  assert.match(apps, /Plan Microsoft Power BI integration/);
  await click(dialog.querySelector('.project-close'));
  assert.equal(document.activeElement, opener);
});
