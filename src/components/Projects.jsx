export default function Projects({ onOpenProject }) {
  return (
<section id="projects" className="content-section" aria-labelledby="projects-title">
          <div className="section-heading projects-heading"><div><p className="section-label">03 / Portfolio</p><h2 id="projects-title">Featured Projects<span className="heading-dot">.</span></h2></div><p>From financial tools and retail systems<br className="desktop-break" /> to commerce and academic exploration.</p></div>
          
          <div className="project-grid">
            <article id="project-exchange" className="project-card project-card--expandable">
              <div className="project-art exchange-art" aria-hidden="true"><span className="preview-label">PROJECT 01 / MOBILE APP</span><div className="exchange-visual"><span>USD</span><span className="exchange-arrow">⇄</span><span>MYR</span></div><span className="art-bottom">CURRENCY / EXCHANGE</span></div>
              <div className="project-body"><p className="project-category">Finance · Full-stack development</p><h3>Currency Exchange Mobile App</h3><p className="project-summary">View live rates, convert currencies, and submit exchange requests in one app. Built from scratch across the frontend and backend.</p><ul className="tags" aria-label="Technologies"><li>ReactJS</li><li>C#</li><li>MySQL</li></ul><button className="project-open" type="button" onClick={(event) => onOpenProject('exchange-details', event.currentTarget)} aria-haspopup="dialog" aria-controls="exchange-details">Explore project <span aria-hidden="true">↗</span></button></div>
            </article>
            <article id="project-pos" className="project-card project-card--expandable">
              <div className="project-art pos-art" aria-hidden="true"><span className="preview-label">PROJECT 02 / WEB · APP · DESKTOP</span><div className="pos-visual"><div className="pos-stock"><span></span><span></span><span></span></div><span className="pos-arrow">→</span><div className="pos-terminal"><span></span><i></i></div></div><span className="art-bottom">STOCK / STORE / SALES</span></div>
              <div className="project-body"><p className="project-category">Inventory &amp; Point of Sale · Full-stack development</p><h3>POS System</h3><p className="project-summary">A multi-role system connecting warehouse stock, store operations, and sales. Available on the web, as an app, and on Windows.</p><ul className="tags" aria-label="Technologies"><li>ReactJS</li><li>C#</li><li>pgAdmin</li><li>Capacitor</li><li>Electron</li></ul><button className="project-open" type="button" onClick={(event) => onOpenProject('pos-details', event.currentTarget)} aria-haspopup="dialog" aria-controls="pos-details">Explore project <span aria-hidden="true">↗</span></button></div>
            </article>
            <article id="project-mall" className="project-card project-card--expandable">
              <div className="project-art mall-art" aria-hidden="true"><span className="preview-label">PROJECT 03 / APP · WEB · PORTAL</span><div className="mall-visual"><span></span><span></span><span></span><span></span></div><span className="art-bottom">SHOP / SELL / MANAGE</span></div>
              <div className="project-body"><p className="project-category">E-commerce · Full-stack development</p><h3>E-Commerce Marketplace App &amp; Admin Portal</h3><p className="project-summary">A mobile and web marketplace for shopping, selling, and rewards, with a dedicated web portal for admin and merchant operations.</p><ul className="tags" aria-label="Technologies"><li>ReactJS</li><li>C#</li><li>pgAdmin</li></ul><button className="project-open" type="button" onClick={(event) => onOpenProject('marketplace-details', event.currentTarget)} aria-haspopup="dialog" aria-controls="marketplace-details">Explore project <span aria-hidden="true">↗</span></button></div>
            </article>
            <article id="project-masters" className="project-card project-card--expandable">
              <div className="project-art research-art" aria-hidden="true"><span className="preview-label">PROJECT 04 / THREE CONNECTED APPS</span><div className="research-visual"><span></span><span></span><span></span><span></span><span></span></div><span className="art-bottom">OBSERVE / REVIEW / RESEARCH</span></div>
              <div className="project-body"><p className="project-category">Research · Requirements &amp; technical planning</p><h3>Depression Detection &amp; Care Monitoring</h3><p className="project-summary">Three connected prototypes for caretakers, medical officers, and research administration. I gathered HUSM requirements, developed the prototypes, and planned and guided intern implementation.</p><ul className="tags" aria-label="My contribution"><li>Prototyping</li><li>Database Planning</li><li>Intern Guidance</li></ul><button className="project-open" type="button" onClick={(event) => onOpenProject('research-details', event.currentTarget)} aria-haspopup="dialog" aria-controls="research-details">Explore project <span aria-hidden="true">↗</span></button></div>
            </article>
          </div>
        </section>
  );
}
