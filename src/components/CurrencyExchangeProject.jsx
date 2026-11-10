import ProjectDialog from './ProjectDialog';
import screenshot1 from '../../projects/CurrencyExchangeApp/03_Homescreen.png';
import screenshot2 from '../../projects/CurrencyExchangeApp/29_Transaction_Details.png';
import screenshot3 from '../../projects/CurrencyExchangeApp/48_Currency_Empty_2.png';

export default function CurrencyExchangeProject({ active, onRequestClose, onClosed }) {
  return (
    <ProjectDialog id="exchange-details" titleId="exchange-dialog-title" active={active} onRequestClose={onRequestClose} onClosed={onClosed}>

    <div className="project-dialog-bar">
      <p className="eyebrow">Portfolio / Project 01</p>
      <button className="button project-close" type="button" onClick={onRequestClose} autoFocus><span aria-hidden="true">×</span> Close project</button>
    </div>
    <div className="project-dialog-content">
      <header className="project-intro">
        <p className="section-label">Finance / Mobile application</p>
        <h2 id="exchange-dialog-title">Currency Exchange<br />Mobile App<span className="heading-dot">.</span></h2>
        <p className="project-lead">Live rates. Simple conversions.<br />Exchange requests in one place.</p>
        <p className="project-overview">A currency exchange app that helps users view real-time exchange rates across multiple countries, convert amounts between currencies, and submit exchange requests.</p>
        <dl className="project-facts">
          <div><dt>My role</dt><dd>Full-stack developer</dd></div>
          <div><dt>Scope</dt><dd>Built from scratch</dd></div>
          <div><dt>Technology</dt><dd>ReactJS · C# · MySQL</dd></div>
        </dl>
      </header>

      <section className="project-detail-section" aria-labelledby="exchange-features-title">
        <div className="section-heading"><div><p className="section-label">01 / The experience</p><h3 id="exchange-features-title">What the app does<span className="heading-dot">.</span></h3></div></div>
        <div className="project-feature-grid">
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">01</span><h4>Live exchange rates</h4><p>View up-to-date rates for currencies across different countries.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">02</span><h4>Currency conversion</h4><p>Choose currencies and enter an amount to see its converted value.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">03</span><h4>Exchange requests</h4><p>Submit a currency exchange request through the app's request flow.</p></article>
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="exchange-role-title">
        <div className="section-heading"><div><p className="section-label">02 / My contribution</p><h3 id="exchange-role-title">Built end to end<span className="heading-dot">.</span></h3></div></div>
        <p className="project-detail-copy">I built the app from scratch and handled all frontend and backend development, connecting the user-facing experience with the services and data behind it.</p>
        <dl className="project-stack-list"><div><dt>ReactJS</dt><dd>Frontend interfaces and user interactions.</dd></div><div><dt>C#</dt><dd>Backend services and application logic.</dd></div><div><dt>MySQL</dt><dd>Application data storage and management.</dd></div></dl>
      </section>

      <section className="project-detail-section" aria-labelledby="exchange-screens-title">
        <div className="section-heading"><div><p className="section-label">03 / A closer look</p><h3 id="exchange-screens-title">Inside the app<span className="heading-dot">.</span></h3></div><p>Select a screen to view it full size.</p></div>
        <div className="project-screenshots project-screenshots--exchange">
          <figure><a href={screenshot1} aria-label="View Dashboard screenshot full size in a preview"><img src={screenshot1} alt="Currency exchange dashboard showing daily sales, profit, transaction totals, and records by currency." width="828" height="1454" loading="lazy" decoding="async" /></a><figcaption>Dashboard</figcaption></figure>
          <figure><a href={screenshot2} aria-label="View Transaction details screenshot full size in a preview"><img src={screenshot2} alt="Approved exchange transaction showing the converted amount, service charge, total, and transaction details." width="827" height="1470" loading="lazy" decoding="async" /></a><figcaption>Transaction details</figcaption></figure>
          <figure><a href={screenshot3} aria-label="View Currency rates &amp; conversion screenshot full size in a preview"><img src={screenshot3} alt="Currency screen showing MYR conversions to IDR, INR, and USD, with an exchange rate chart." width="828" height="1845" loading="lazy" decoding="async" /></a><figcaption>Currency rates &amp; conversion</figcaption></figure>
        </div>
        </section>
        <footer className="project-dialog-footer"><p>Currency Exchange Mobile App / Full-stack development</p>
          {/* <button className="button" type="button" onClick={onRequestClose}>Back to projects <span aria-hidden="true">↙</span></button> */}
        </footer>
      </div>
  
    </ProjectDialog>
  );
}
