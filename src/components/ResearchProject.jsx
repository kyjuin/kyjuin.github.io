import ProjectDialog from './ProjectDialog';

const apps = [
  {
    id: 'caretaker', number: '01', platform: 'Mobile', title: 'Caretaker App',
    stack: ['React Native', 'Expo', 'Expo Router', 'TypeScript tooling'],
    description: 'Record daily observations and coordinate patient care.',
    features: [
      'CSDD-informed entries and Daylio-style mood tracking.',
      'Condition history, profile, reminders, and medical team details.',
      'View appointments scheduled by medical officers.',
      'Request rescheduling with MO approval.',
    ],
    boundary: 'Appointment scheduling stays with the MO.',
    url: 'https://www.figma.com/make/K9kQtJhJK5aUWqssella82/Depression-Caretaker-App?fullscreen=1',
  },
  {
    id: 'monitoring', number: '02', platform: 'Web / Mobile', title: 'MO Monitoring App',
    stack: ['ReactJS', 'Vite', 'Tailwind CSS', 'Recharts'],
    description: 'Review condition updates and manage consultations.',
    features: [
      'Review daily updates and questionnaire results.',
      'Schedule appointments and approve rescheduling.',
      'Assign assessments and capture caretaker facial-expression videos.',
      'Manage treatment, medication, and consultation records.',
    ],
    boundary: 'MOs oversee consultations and care decisions.',
    url: 'https://www.figma.com/make/PaxYYp9M6OKq8OLnCOt83F/Depression-Monitoring-App?fullscreen=1',
  },
  {
    id: 'detection', number: '03', platform: 'Admin panel', title: 'Depression Detection System',
    stack: ['ReactJS', 'Vite', 'Tailwind CSS', 'Recharts'],
    description: 'Process research videos and review detection records.',
    features: [
      'Process caretaker videos for research classifications.',
      'Link patient, caretaker, and MO records.',
      'Filter detection history by severity, name, gender, and date.',
      'Plan Microsoft Power BI integration for reporting.',
    ],
    boundary: 'Model outputs remain separate from screening scores.',
    url: 'https://www.figma.com/make/cCdchjuZXIBwtXO6rxzCTY/Depression-Detection-System?fullscreen=1',
  },
];

const contributions = [
  ['Requirements gathering', 'Worked with HUSM to gather requirements and translate care, appointment, and research workflows into application plans.'],
  ['Three working prototypes', 'Developed the caretaker, MO monitoring, and detection admin prototypes to communicate the intended interfaces and interactions.'],
  ['Database & technology planning', 'Planned the database schema and application technologies, including how patient, caretaker, appointment, and detection information would connect.'],
  ['Implementation guidance', 'Assigned development work to an intern and guided implementation using the requirements, plans, and prototypes.'],
];

export default function ResearchProject({ active, onRequestClose, onClosed }) {
  return (
    <ProjectDialog id="research-details" titleId="research-dialog-title" active={active} onRequestClose={onRequestClose} onClosed={onClosed}>
      <div className="project-dialog-bar">
        <p className="eyebrow">Portfolio / Project 04</p>
        <button className="button project-close" type="button" onClick={onRequestClose} autoFocus><span aria-hidden="true">×</span> Close project</button>
      </div>
      <div className="project-dialog-content">
        <header className="project-intro">
          <p className="section-label">Research / Three-app ecosystem</p>
          <h2 id="research-dialog-title">Depression Detection<br />&amp; Care Monitoring<span className="heading-dot">.</span></h2>
          <p className="project-lead">Daily observations. Connected care.<br />A shared foundation for research.</p>
          <p className="project-overview">A research project connecting a caretaker mobile app, a medical officer monitoring app, and a depression detection admin panel. The proposed ecosystem brings daily patient observations, care coordination, facial-expression model processing, and reporting into a connected workflow.</p>
          <ul className="skill-tags project-platforms" aria-label="Research applications">
            <li>Caretaker · Mobile</li><li>Medical Officer · Web &amp; Mobile</li><li>Detection · Admin panel</li>
          </ul>
          <dl className="project-facts">
            <div><dt>My role</dt><dd>Requirements, prototyping &amp; technical planning</dd></div>
            <div><dt>Scope</dt><dd>Three prototypes &amp; intern guidance</dd></div>
            <div><dt>Frontend stack</dt><dd>ReactJS · React Native · Expo</dd></div>
          </dl>
          <div className="research-credit">
            <p><strong>My contribution:</strong> HUSM requirements gathering, prototype development, database schema and technology planning, and intern task assignment and guidance.</p>
            <p><strong>Implementation credit:</strong> The intern developed the application code based on these plans and prototypes, using ReactJS for the MO web app and admin panel, React Native with Expo for the caretaker app, and C# for the backend with SQL database work managed through pgAdmin.</p>
          </div>
        </header>

        <section className="project-detail-section" aria-labelledby="research-contribution-title">
          <div className="section-heading"><div><p className="section-label">01 / My contribution</p><h3 id="research-contribution-title">From requirements to a development plan<span className="heading-dot">.</span></h3></div></div>
          <div className="project-feature-grid research-contribution-grid">
            {contributions.map(([title, description], index) => (
              <article className="project-feature-card" key={title}><span className="feature-number" aria-hidden="true">0{index + 1}</span><h4>{title}</h4><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="project-detail-section" aria-labelledby="research-apps-title">
          <div className="section-heading"><div><p className="section-label">02 / Three connected applications</p><h3 id="research-apps-title">One project, three perspectives<span className="heading-dot">.</span></h3></div></div>
          <div className="research-app-grid">
            {apps.map(app => (
              <article className="project-feature-card research-app-card" key={app.id}>
                <div className="research-app-meta"><span className="feature-number">{app.number}</span><span className="eyebrow">{app.platform}</span></div>
                <h4>{app.title}</h4>
                <p className="research-app-purpose">{app.description}</p>
                <ul className="skill-tags research-app-stack" aria-label={`${app.title} configured frontend technologies`}>{app.stack.map(tool => <li key={tool}>{tool}</li>)}</ul>
                <ul className="marketplace-feature-list">{app.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                <p className="research-app-boundary">{app.boundary}</p>
                <a className="button button-secondary research-prototype-link" href={app.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${app.title} Figma prototype (opens in a new tab)`}>View prototype <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-section" aria-labelledby="research-flow-title">
          <div className="section-heading"><div><p className="section-label">03 / How the apps connect</p><h3 id="research-flow-title">From daily observations to research insights<span className="heading-dot">.</span></h3></div></div>
          <ol className="research-workflow" aria-label="Proposed research and care workflow">
            <li><span className="feature-number" aria-hidden="true">01</span><h4>Caretaker observations</h4><p>Daily condition entries and appointment rescheduling requests.</p></li>
            <li><span className="feature-number" aria-hidden="true">02</span><h4>MO review &amp; consultation</h4><p>Review updates, manage appointments, assess condition, and capture video.</p></li>
            <li><span className="feature-number" aria-hidden="true">03</span><h4>Research model processing</h4><p>Process facial-expression video and record classification outputs.</p></li>
            <li><span className="feature-number" aria-hidden="true">04</span><h4>Records &amp; analytics</h4><p>Connect detection history with care records and reporting.</p></li>
          </ol>
          <p className="research-context-note">These are research prototypes. Model classifications and questionnaire screening bands are separate from clinical assessment by a medical officer.</p>
        </section>

        <section className="project-detail-section" aria-labelledby="research-planning-title">
          <div className="section-heading"><div><p className="section-label">04 / Technical planning &amp; stack</p><h3 id="research-planning-title">Plan the shared data, then guide the build<span className="heading-dot">.</span></h3></div></div>
          <p className="project-detail-copy">I planned the database structure around the information shared across the three applications, including patient–caretaker relationships, daily entries, appointment requests, consultations, treatment information, and detection history.</p>
          <dl className="project-stack-list">
            <div><dt>Figma</dt><dd>Three prototypes for communicating application flows and requirements.</dd></div>
            <div><dt>ReactJS / Vite</dt><dd>Confirmed in the intern's MO web app and admin panel package files, with React Router, Tailwind CSS, Recharts, and Lucide React dependencies.</dd></div>
            <div><dt>React Native / Expo</dt><dd>Confirmed in the caretaker app package file, with Expo Router, React Native Web, AsyncStorage, and TypeScript tooling. Package support does not by itself confirm every platform was released.</dd></div>
            <div><dt>C#</dt><dd>Backend services and application logic shared across the three applications.</dd></div>
            <div><dt>SQL / pgAdmin</dt><dd>SQL database work and administration using pgAdmin.</dd></div>
            <div><dt>Power BI</dt><dd>Planned analytics integration for detection results and trends.</dd></div>
          </dl>
          {/* <details className="research-reference">
            <summary>Project reference: GDS screening bands <span aria-hidden="true">+</span></summary>
            <p className="project-detail-copy">The following bands were supplied in the HUSM project requirements and are shown here as design context, rather than a diagnostic tool.</p>
            <dl className="research-gds-bands"><div><dt>Low</dt><dd>5–8</dd></div><div><dt>Moderate</dt><dd>9–11</dd></div><div><dt>Severe</dt><dd>12–15</dd></div></dl>
          </details> */}
        </section>

        <footer className="project-dialog-footer"><p>Depression Detection &amp; Care Monitoring / Research prototypes &amp; technical planning</p>
          {/* <button className="button" type="button" onClick={onRequestClose}>Back to projects <span aria-hidden="true">↙</span></button> */}
        </footer>
      </div>
    </ProjectDialog>
  );
}
