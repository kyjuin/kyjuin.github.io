import assert from 'node:assert/strict';
import { before, after, afterEach, test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';

let server;
let App;
let dom;
let root;

before(async () => {
  server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
    logLevel: 'error',
  });
  ({ default: App } = await server.ssrLoadModule('/src/App.jsx'));
});

after(async () => { await server?.close(); });
afterEach(async () => {
  if (root) await act(async () => root.unmount());
  root = null;
  dom?.window.close();
});

async function mount({ savedTheme, storageUnavailable = false } = {}) {
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'https://example.com/portfolio/',
    runScripts: 'outside-only',
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.localStorage = dom.window.localStorage;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
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
  assert.ok(document.querySelector('.contact-submit').disabled);
  assert.equal(document.querySelectorAll('form[action*="formsubmit"]').length, 0);
  assert.equal(document.querySelectorAll('.hero-socials a').length, 3);
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
