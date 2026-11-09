import ProjectDialog from './ProjectDialog';

export default function PosProject({ active, onRequestClose, onClosed }) {
  return (
    <ProjectDialog id="pos-details" titleId="pos-dialog-title" active={active} onRequestClose={onRequestClose} onClosed={onClosed}>

    <div className="project-dialog-bar"><p className="eyebrow">Portfolio / Project 02</p><button className="button project-close" type="button" onClick={onRequestClose} autoFocus><span aria-hidden="true">×</span> Close project</button></div>
    <div className="project-dialog-content">
      <header className="project-intro">
        <p className="section-label">Retail / Inventory &amp; point of sale</p>
        <h2 id="pos-dialog-title">POS System<span className="heading-dot">.</span></h2>
        <p className="project-lead">From warehouse to store to sales.<br />One system. Multiple roles.</p>
        <p className="project-overview">A multi-role inventory and point-of-sale system that tracks stock across warehouse, store, and sales operations. It supports restocking, salesman stock checkout and returns, cashier checkout, returns and refunds, and merchant reporting.</p>
        <p className="project-overview">A mobile app for salesmen and a Windows desktop app for cashiers, connected to the same backend and inventory data.</p>
        <ul className="skill-tags project-platforms" aria-label="Available platforms"><li>Web</li><li>App · Capacitor</li><li>Windows · Electron</li></ul>
        <dl className="project-facts"><div><dt>My role</dt><dd>Full-stack developer</dd></div><div><dt>Scope</dt><dd>Team development &amp; maintenance</dd></div><div><dt>Technology</dt><dd>ReactJS · C# · pgAdmin</dd></div></dl>
      </header>
      <section className="project-detail-section" aria-labelledby="pos-roles-title">
        <div className="section-heading"><div><p className="section-label">01 / People &amp; responsibilities</p><h3 id="pos-roles-title">Five roles, one connected workflow<span className="heading-dot">.</span></h3></div></div>
        <p className="project-detail-copy">Each role supports a different part of the stock and sales lifecycle, from receiving inventory to completing a sale and reviewing reports.</p>
        <ol className="project-role-list">
          <li><span className="role-number" aria-hidden="true">01</span><h4>Merchant</h4><p>Oversees the business and reviews sales and inventory reports.</p></li>
          <li><span className="role-number" aria-hidden="true">02</span><h4>Warehouse &amp; stockkeeper</h4><p>Manages warehouse restocking and stock transfers to salesmen or stores.</p></li>
          <li><span className="role-number" aria-hidden="true">03</span><h4>Store</h4><p>Holds stock and supports daily store operations.</p></li>
          <li><span className="role-number" aria-hidden="true">04</span><h4>Salesman</h4><p>Processes sales from their own assigned stock and returns unsold items.</p></li>
          <li><span className="role-number" aria-hidden="true">05</span><h4>Cashier</h4><p>Handles checkout from store stock, customer returns, and refunds.</p></li>
        </ol>
      </section>
      <section className="project-detail-section" aria-labelledby="pos-features-title">
        <div className="section-heading"><div><p className="section-label">02 / The experience</p><h3 id="pos-features-title">What the system does<span className="heading-dot">.</span></h3></div></div>
        <div className="project-feature-grid">
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">01</span><h4>Warehouse restocking &amp; stock transfer</h4><p>Restock the warehouse, then transfer stock to salesmen or stores.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">02</span><h4>Salesman stock checkout &amp; return</h4><p>Support salesman checkout from their assigned stock and track unsold items returned.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">03</span><h4>Cashier checkout, returns &amp; refunds</h4><p>Support checkout from store stock and handle customer returns and refunds.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">04</span><h4>Real-time stock tracking</h4><p>Keep stock levels visible as inventory moves through the business.</p></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">05</span><h4>Sales &amp; inventory reports</h4><p>Give merchants a view of sales activity and inventory for business oversight.</p></article>
        </div>
      </section>
      <section className="project-detail-section" aria-labelledby="pos-contribution-title">
        <div className="section-heading"><div><p className="section-label">03 / My contribution</p><h3 id="pos-contribution-title">Develop, improve, maintain<span className="heading-dot">.</span></h3></div></div>
        <p className="project-detail-copy">I work with the team on frontend and backend development, gather feedback, and improve the system based on project requirements. My work includes implementing new features, refining existing functionality, and maintaining the web application.</p>
        <dl className="project-stack-list"><div><dt>ReactJS</dt><dd>Frontend interfaces and user interactions.</dd></div><div><dt>C#</dt><dd>Backend services and application logic.</dd></div><div><dt>pgAdmin</dt><dd>Database administration and management.</dd></div><div><dt>Capacitor</dt><dd>App delivery.</dd></div><div><dt>Electron</dt><dd>Windows desktop delivery.</dd></div></dl>
      </section>
      <section className="project-detail-section" aria-labelledby="pos-flow-title">
        <div className="section-heading"><div><p className="section-label">04 / How it connects</p><h3 id="pos-flow-title">The stock &amp; sales flow<span className="heading-dot">.</span></h3></div></div>
        <div className="pos-flow" role="group" aria-label="Stock workflow: warehouse restocking, transfer to salesman or store stock, checkout from each stock, returns or refunds, and reports.">
          <div className="pos-flow-heading"><p className="eyebrow"><span className="status-dot" aria-hidden="true"></span> Warehouse restocking. Two stock destinations.</p></div>
          <div className="pos-flow-supply" role="group" aria-label="Warehouse restocking and transfer">
            <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">01</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21V8l9-5 9 5v13M3 9h18M7 21V12h10v9M7 16h10M7 20h10"/></svg></span><strong>Warehouse restock</strong><span className="flow-node-caption">Receive and replenish warehouse stock</span></div>
            <span className="flow-arrow" aria-hidden="true">→</span>
            <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">02</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h12v12H3zM15 10h4l3 4v4h-7M6 3h6M7 10h4m-2-2v4"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg></span><strong>Stock transfer</strong><span className="flow-node-caption">Transfer warehouse stock to salesman or store</span></div>
          </div>
          <div className="flow-split" aria-hidden="true"><span>Two stock destinations</span></div>
          <div className="pos-flow-lanes">
            <div className="pos-flow-lane" role="group" aria-label="Salesman stock and checkout"><p className="flow-lane-label">Salesman path</p>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">03A</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="6" r="3"/><path d="M5 21v-4a7 7 0 0 1 14 0v4M8 18h8m-4-3v6"/></svg></span><strong>Salesman stock</strong><span className="flow-node-caption">Stock transferred to the salesman</span></div>
              <span className="flow-down" aria-hidden="true">↓</span>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">04A</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="6" r="3"/><path d="M5 21v-4a7 7 0 0 1 14 0v4M8 18h8m-4-3v6"/></svg></span><strong>Salesman checkout</strong><span className="flow-node-caption">Sell from their own assigned stock</span></div>
              <span className="flow-down" aria-hidden="true">↓</span>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">05A</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 5 3 10l5 5M3 10h11a7 7 0 0 1 0 14" transform="translate(0 -3)"/></svg></span><strong>Return</strong><span className="flow-node-caption">Return unsold stock</span></div>
            </div>
            <div className="pos-flow-lane" role="group" aria-label="Store stock and cashier checkout"><p className="flow-lane-label">Store path</p>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">03B</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10v11h16V10M2 10l3-7h14l3 7M2 10c0 4 5 4 5 0 0 4 5 4 5 0 0 4 5 4 5 0 0 4 5 4 5 0M9 21v-7h6v7"/></svg></span><strong>Store stock</strong><span className="flow-node-caption">Stock transferred to the store</span></div>
              <span className="flow-down" aria-hidden="true">↓</span>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">04B</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5M7 7h5m-5 4h9"/></svg></span><strong>Cashier checkout</strong><span className="flow-node-caption">Sell from the store stock</span></div>
              <span className="flow-down" aria-hidden="true">↓</span>
              <div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">05B</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10a9 9 0 1 1 1 9M3 4v6h6M14 7h-3a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-3m2-10v12"/></svg></span><strong>Return / Refund</strong><span className="flow-node-caption">Handle customer returns and refunds</span></div>
            </div>
          </div>
          <div className="flow-merge" aria-hidden="true"><span>↓</span></div>
          <div className="pos-flow-report"><div className="pos-flow-node"><span className="flow-node-top"><span className="flow-step">06</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 3v18h17M8 17v-5m5 5V8m5 9V5"/></svg></span><strong>Reports</strong><span className="flow-node-caption">Merchant sales and inventory visibility</span></div></div>
        </div>
      </section>
      <section className="project-detail-section" aria-labelledby="pos-screens-title">
        <div className="section-heading"><div><p className="section-label">05 / A closer look</p><h3 id="pos-screens-title">Inside the system<span className="heading-dot">.</span></h3></div><p>UI screenshots will be added here.</p></div>
        
        <div className="project-screenshots">
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">01 / WEB</span><p>Screenshot coming soon</p></div><figcaption>Web application</figcaption></figure>
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">02 / APP</span><p>Screenshot coming soon</p></div><figcaption>App · Capacitor</figcaption></figure>
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">03 / WINDOWS</span><p>Screenshot coming soon</p></div><figcaption>Windows · Electron</figcaption></figure>
        </div>
      </section>
      <footer className="project-dialog-footer"><p>POS System / Full-stack development</p><button className="button" type="button" onClick={onRequestClose}>Back to projects <span aria-hidden="true">↙</span></button></footer>
    </div>
  
    </ProjectDialog>
  );
}
