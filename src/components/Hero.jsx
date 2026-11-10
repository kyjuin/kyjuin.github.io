export default function Hero() {
  return (
<section id="home" className="hero-row" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true"></span> OPEN TO WORK</p>
            <h1 id="hero-title">Software<br /><span>Engineer.</span></h1>
            <p className="hero-text">I’m a full-stack developer with 3+ years of experience building web, mobile, and desktop applications.</p>

        <div className="hero-actions">
          {/* <button className="button button-primary" type="button" disabled title="Resume download will be available once the PDF is added">Download Resume <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></svg></button> */}
          <a
            className="button button-primary"
            href={`${import.meta.env.BASE_URL}KEONG YI JUIN RESUME.pdf`}
            download="Keong Yi Juin Resume.pdf"
          >
            Download Resume
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></svg>
          </a>              
          <a className="button button-secondary" href="#skills">View my skills <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-socials" role="group" aria-label="Connect with Keong Yi Juin">
          <a className="social-link" data-social="github" href="https://github.com/kyjuin" target="_blank" rel="noopener noreferrer" aria-label="Open Keong Yi Juin’s GitHub profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3-.3 6-1.5 6-6A4.7 4.7 0 0 0 18.7 6a4.3 4.3 0 0 0-.1-3s-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6 0C6.5 2.7 5.4 3 5.4 3a4.3 4.3 0 0 0-.1 3A4.7 4.7 0 0 0 4 9.3c0 4.5 3 5.7 6 6A3.5 3.5 0 0 0 9 18v4"/></svg></a>
              <a className="social-link" data-social="linkedin" href="https://www.linkedin.com/in/yi-juin-keong-356686288" target="_blank" rel="noopener noreferrer" aria-label="Open Keong Yi Juin’s LinkedIn profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10h.01M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></svg></a>
              <a className="social-link" data-social="email" href="mailto:kyjuin26@gmail.com" aria-label="Email Keong Yi Juin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></a>
            </div>
          </div>
          <aside className="hero-feature" aria-label="Portfolio preview">
            <div className="feature-art" aria-hidden="true"><span className="art-orbit orbit-one"></span><span className="art-orbit orbit-two"></span><span className="art-core"></span><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span><span className="art-caption">IDEA → BUILD → REFINE</span></div>
            <div className="feature-caption"><div><p className="eyebrow">Inside the portfolio</p><h2>Four projects. Different challenges.</h2></div><a href="#projects" className="circle-link" aria-label="Explore the four projects">↘</a></div>
          </aside>
        </section>
  );
}
