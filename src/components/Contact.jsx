export default function Contact() {
  return (
<section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
          <div className="section-heading contact-heading"><div><p className="section-label">04 / Get in touch</p><h2 id="contact-title">Let's work together<span className="heading-dot">.</span></h2></div><p>Have an opportunity or a project in mind?<br className="desktop-break" /> Let's talk about how I can contribute.</p></div>
          <div className="contact-grid">
            <div id="contact-form" className="contact-form" role="group" aria-labelledby="contact-form-title" aria-describedby="contact-form-note">
              <h3 id="contact-form-title">Send a message</h3>


              <div className="contact-form-row">
                <div className="contact-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" maxLength="100" disabled /></div>
                <div className="contact-field"><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength="254" disabled /></div>
              </div>
              <div className="contact-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" maxLength="160" disabled /></div>
              <div className="contact-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about your opportunity or project…" maxLength="3000" disabled></textarea></div>
              <button className="button button-primary contact-submit" type="button" disabled title="Message sending is temporarily unavailable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Zm0 0L11 13"/></svg> Send Message</button>
              <p id="contact-form-note" className="contact-form-note">Message sending is temporarily unavailable. You can <a href="mailto:kyjuin26@gmail.com">email me directly</a>.</p>

            </div>
          </div>
        </section>
  );
}
