import ProjectDialog from './ProjectDialog';

export default function MarketplaceProject({ active, onRequestClose, onClosed }) {
  return (
    <ProjectDialog id="marketplace-details" titleId="marketplace-dialog-title" active={active} onRequestClose={onRequestClose} onClosed={onClosed}>

    <div className="project-dialog-bar"><p className="eyebrow">Portfolio / Project 03</p><button className="button project-close" type="button" onClick={onRequestClose} autoFocus><span aria-hidden="true">×</span> Close project</button></div>
    <div className="project-dialog-content">
      <header className="project-intro">
        <p className="section-label">E-commerce / Marketplace &amp; back-office management</p>
        <h2 id="marketplace-dialog-title">E-Commerce Marketplace<br />App &amp; Admin Portal<span className="heading-dot">.</span></h2>
        <p className="project-lead">Shop, sell, and earn rewards.<br />Manage the marketplace behind it.</p>
        <p className="project-overview">An e-commerce platform where customers discover products, shop, pay, track shipments, and review their purchases. Sellers manage products and shipments, while admins and merchants oversee marketplace operations through a dedicated web portal.</p>
        <p className="project-overview">Customers can also earn reward points and redeem them for e-wallet vouchers or payments.</p>
        <ul className="skill-tags project-platforms" aria-label="Available platforms"><li>Marketplace · Mobile &amp; Web</li><li>Admin &amp; Merchant Portal · Web</li></ul>
        <dl className="project-facts"><div><dt>My role</dt><dd>Full-stack software developer</dd></div><div><dt>Scope</dt><dd>Team development &amp; maintenance</dd></div><div><dt>Technology</dt><dd>ReactJS · C# · pgAdmin</dd></div></dl>
      </header>
      <section className="project-detail-section" aria-labelledby="marketplace-platforms-title">
        <div className="section-heading"><div><p className="section-label">01 / Platform overview</p><h3 id="marketplace-platforms-title">Two experiences, one marketplace<span className="heading-dot">.</span></h3></div></div>
        <div className="project-feature-grid marketplace-platform-grid">
          <article className="project-feature-card"><span className="feature-number">MOBILE / WEB</span><h4>Customer &amp; seller marketplace</h4><p>The shopping and selling experience: product discovery, payment, reviews, rewards, and seller tools, available on mobile and web.</p></article>
          <article className="project-feature-card"><span className="feature-number">WEB PORTAL</span><h4>Admin &amp; merchant operations</h4><p>A web-only back office for managing users, products, orders, refunds, vouchers, and promotional banners.</p></article>
        </div>
      </section>
      <section className="project-detail-section" aria-labelledby="marketplace-features-title">
        <div className="section-heading"><div><p className="section-label">02 / People &amp; features</p><h3 id="marketplace-features-title">Built for every side of the marketplace<span className="heading-dot">.</span></h3></div></div>
        <div className="project-feature-grid">
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">01 / SHOP</span><h4>Customer</h4><p>From finding a product to reviewing a purchase.</p><ul className="marketplace-feature-list"><li>Browse categories and search for products</li><li>Add items to cart, check out, and pay</li><li>Track shipping progress</li><li>Rate and review purchases</li><li>Earn reward points and redeem them for e-wallet vouchers or payments</li></ul></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">02 / SELL</span><h4>Seller</h4><p>Tools to take products from listing to shipment.</p><ul className="marketplace-feature-list"><li>Upload products</li><li>Handle incoming orders</li><li>Arrange shipments</li></ul></article>
          <article className="project-feature-card"><span className="feature-number" aria-hidden="true">03 / MANAGE</span><h4>Admin &amp; merchant</h4><p>Back-office controls for daily marketplace operations.</p><ul className="marketplace-feature-list"><li>Manage users and downlines</li><li>Manage products and categories</li><li>Oversee orders and refunds</li><li>Manage vouchers</li><li>Manage promotional banners</li></ul></article>
        </div>
      </section>
      <section className="project-detail-section" aria-labelledby="marketplace-role-title">
        <div className="section-heading"><div><p className="section-label">03 / My contribution</p><h3 id="marketplace-role-title">Develop, refine, maintain<span className="heading-dot">.</span></h3></div></div>
        <p className="project-detail-copy">I work with the team as a full-stack software developer across the marketplace and admin portal. My work includes frontend and backend development, gathering feedback, adding and improving features based on requirements, and maintaining the web applications.</p>
        <dl className="project-stack-list"><div><dt>ReactJS</dt><dd>Marketplace and portal interfaces and user interactions.</dd></div><div><dt>C#</dt><dd>Backend services and application logic.</dd></div><div><dt>pgAdmin</dt><dd>Database administration and management.</dd></div></dl>
      </section>
      <section className="project-detail-section" aria-labelledby="marketplace-screens-title">
        <div className="section-heading"><div><p className="section-label">04 / A closer look</p><h3 id="marketplace-screens-title">Inside the marketplace<span className="heading-dot">.</span></h3></div><p>UI screenshots will be added here.</p></div>
        
        <div className="project-screenshots">
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">01 / MOBILE</span><p>Screenshot coming soon</p></div><figcaption>Marketplace mobile app</figcaption></figure>
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">02 / WEB</span><p>Screenshot coming soon</p></div><figcaption>Marketplace web app</figcaption></figure>
          <figure><div className="screenshot-placeholder"><span aria-hidden="true">03 / PORTAL</span><p>Screenshot coming soon</p></div><figcaption>Admin &amp; merchant portal</figcaption></figure>
        </div>
        </section>
        <footer className="project-dialog-footer"><p>E-Commerce Marketplace / Full-stack development</p>
          {/* <button className="button" type="button" onClick={onRequestClose}>Back to projects <span aria-hidden="true">↙</span></button> */}
        </footer>
      </div>

    </ProjectDialog>
  );
}
