# Keong Yi Juin — Portfolio

My personal portfolio showcasing my skills, professional experience, and selected projects across web, mobile, and desktop applications.

I’m a full-stack developer with 3+ years of experience. This website brings together the systems I’ve worked on, my contributions, and the thinking behind each project.

## Website features

- Responsive layouts for desktop, tablet, and mobile.
- Light and dark modes with a saved theme preference.
- Four main sections: **Skills, Experience, Projects, and Contact**.
- Full-screen project case studies covering the overview, role, features, technologies, and available UI previews.
- Contact form integrated with Web3Forms and hCaptcha, with submission feedback and error handling.
- Quick links to GitHub, LinkedIn, and email.

## Featured projects

### 01 · Currency Exchange Mobile App

A currency exchange application for viewing live exchange rates, converting currencies, and submitting exchange requests.

- **My contribution:** Built the frontend and backend from scratch.
- **Technologies:** ReactJS, C#, MySQL.
- **Portfolio content:** Feature overview and three application screenshots.

### 02 · POS System

A multi-role inventory and point-of-sale system covering warehouse restocking, stock transfers, sales, returns, refunds, and reporting. The web system, salesmen’s mobile app, and cashiers’ Windows app share the same backend and inventory data.

- **My contribution:** Collaborated with the team on full-stack development, requirement changes, feature improvements, and web maintenance.
- **Technologies:** ReactJS, C#, SQL database tooling with pgAdmin, Capacitor, Electron.
- **Portfolio content:** User roles, platform overview, and a stock-to-sales workflow diagram.

### 03 · E-Commerce Marketplace App & Admin Portal

A marketplace supporting customer shopping, seller operations, and administrative management through mobile and web interfaces. Features include checkout, shipment tracking, reviews, reward points, and back-office tools.

- **My contribution:** Worked with the team on full-stack development and improvements based on requirements and feedback.
- **Technologies:** ReactJS, C#, SQL database tooling with pgAdmin.
- **Portfolio content:** Platform overview and features grouped by customer, seller, and admin/merchant roles.

### 04 · Depression Detection & Care Monitoring Research Project

A research project connecting three applications: a caretaker mobile app, a medical officer monitoring app, and a depression detection admin panel.

- **My contribution:** Gathered requirements from HUSM, developed three prototypes, planned the database schema and technology approach, and assigned and guided an intern’s development work.
- **Implementation credit:** Application code was developed by the intern.
- **Technologies:** ReactJS and Vite for the web interfaces, React Native and Expo for the caretaker app, and C# with SQL database tooling through pgAdmin for the backend. Power BI integration is planned.
- **Portfolio content:** Three app summaries, contribution details, and links to the Figma prototypes.

## Portfolio technology stack

| Area | Technology |
| --- | --- |
| User interface | React |
| Development and production build | Vite |
| Styling | Custom CSS with responsive layouts and theme variables |
| Contact form | Web3Forms and hCaptcha |
| Automated checks | Node.js test runner and jsdom |
| Hosting and deployment | GitHub Pages and GitHub Actions |

The technologies listed under each featured project describe those projects, rather than the portfolio website itself.

## Run locally

Use **Node.js 22** to match the deployment workflow.

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. The React application must run through Vite; opening `index.html` directly will not start it.

Additional commands:

| Command | Purpose |
| --- | --- |
| `npm test` | Run the automated checks |
| `npm run build` | Generate the production website in `dist/` |
| `npm run preview` | Preview the production build locally after building |

## Project structure

```text
.github/workflows/deploy.yml   GitHub Pages deployment workflow
src/
  main.jsx                    React entry point
  App.jsx                     Main page composition
  components/                 Page sections and project case studies
projects/                     Project image assets
style.css                     Shared styles, themes, and responsive layouts
tests/                        Automated checks
index.html                    Vite HTML entry
vite.config.js                Vite configuration
```

## Update the content

Some project galleries are placeholders awaiting screenshots. Only include images approved for public sharing.


## Contact form

The contact form submits to Web3Forms without leaving the portfolio page. It includes required-field validation, a hidden spam-trap field, hCaptcha verification, duplicate-submission prevention, and success/error messages. Failed submissions preserve the typed message for retrying.


## Connect

- [GitHub](https://github.com/kyjuin)
- [LinkedIn](https://www.linkedin.com/in/yi-juin-keong-356686288)
- [Email](mailto:kyjuin26@gmail.com)
