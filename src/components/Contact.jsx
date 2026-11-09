import { useEffect, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Web3Forms form keys are public identifiers, not private email credentials.
const ACCESS_KEY = '8e641a03-a815-4ffb-a76f-473856cad469';
const CAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const captchaRef = useRef(null);
  const submittingRef = useRef(false);
  const requestRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
      setCaptchaToken('');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      observer.disconnect();
      requestRef.current?.abort();
    };
  }, []);

  const submitMessage = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    if (values.botcheck) return;
    for (const field of ['name', 'email', 'subject', 'message']) {
      values[field] = values[field].trim();
      if (!values[field]) {
        setStatus({ type: 'error', message: 'Please complete all fields before sending.' });
        form.elements.namedItem(field).focus();
        return;
      }
    }
    if (!captchaToken) {
      setStatus({ type: 'error', message: 'Please complete the verification before sending.' });
      return;
    }

    submittingRef.current = true;
    setSending(true);
    setStatus({ type: 'sending', message: 'Sending your message…' });
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        credentials: 'omit',
        signal: controller.signal,
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: 'Keong Yi Juin — Portfolio',
          'h-captcha-response': captchaToken,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error('The message service did not accept this submission.');
      }
      form.reset();
      setStatus({ type: 'success', message: 'Your message was submitted. Thank you for getting in touch!' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.name === 'AbortError'
          ? 'The request timed out. Please try again later or email me directly.'
          : 'Your message could not be confirmed. Please try again later or email me directly.',
      });
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
      submittingRef.current = false;
      setSending(false);
      setCaptchaToken('');
      captchaRef.current?.resetCaptcha();
    }
  };

  return (
<section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
          <div className="section-heading contact-heading"><div><p className="section-label">04 / Get in touch</p><h2 id="contact-title">Let's work together<span className="heading-dot">.</span></h2></div><p>Have an opportunity or a project in mind?<br className="desktop-break" /> Let's talk about how I can contribute.</p></div>
          <div className="contact-grid">
            <form id="contact-form" className="contact-form" onSubmit={submitMessage} aria-labelledby="contact-form-title" aria-describedby="contact-form-note" aria-busy={sending}>
              <h3 id="contact-form-title">Send a message</h3>


              <div className="contact-form-row">
                <div className="contact-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" maxLength="100" required disabled={sending} /></div>
                <div className="contact-field"><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength="254" required disabled={sending} /></div>
              </div>
              <div className="contact-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" maxLength="160" required disabled={sending} /></div>
              <div className="contact-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about your opportunity or project…" maxLength="3000" required disabled={sending}></textarea></div>
              <input type="checkbox" name="botcheck" className="contact-honeypot" hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="contact-captcha" role="group" aria-label="Spam verification">
                <HCaptcha
                  key={theme}
                  ref={captchaRef}
                  sitekey={CAPTCHA_SITE_KEY}
                  reCaptchaCompat={false}
                  theme={theme}
                  size="compact"
                  sentry={false}
                  userJourneys={false}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setStatus({ type: 'idle', message: '' });
                  }}
                  onExpire={() => setCaptchaToken('')}
                  onChalExpired={() => setCaptchaToken('')}
                  onError={() => {
                    setCaptchaToken('');
                    setStatus({ type: 'error', message: 'Verification could not load. Please refresh or email me directly.' });
                  }}
                />
              </div>
              <button className="button button-primary contact-submit" type="submit" disabled={sending}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Zm0 0L11 13"/></svg> {sending ? 'Sending…' : 'Send Message'}</button>
              <p id="contact-form-note" className="contact-form-note">Your details and message are processed by <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">Web3Forms</a> to deliver your enquiry. You can also <a href="mailto:kyjuin26@gmail.com">email me directly</a>.</p>
              {status.message && <p className={`contact-form-note contact-feedback contact-feedback--${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.message}</p>}
            </form>
          </div>
        </section>
  );
}
