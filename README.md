# Keong Yi Juin — React portfolio

The portfolio uses React and Vite. Its existing CSS, section order, project content, and light/dark design are retained.

## Run locally

Use Node.js 20 or 22, then run:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. Opening `index.html` directly no longer runs the website.

```sh
npm test
npm run build
npm run preview
```

The production website is generated in `dist/` with versioned assets to avoid mixing old styles with new pages.

## Edit content

- `src/components/`: header, introduction, skills, experience, projects, contact, and footer.
- `CurrencyExchangeProject.jsx`, `PosProject.jsx`, and `MarketplaceProject.jsx`: full-screen project details.
- `style.css`: the shared design and responsive layouts.
- `projects/`: original project images. Currency screenshots are imported by the React component and bundled during the build.

The contact form remains paused after removing FormSubmit. Its direct email link works. The résumé button remains disabled until a résumé file is supplied.

## Publish on GitHub Pages

1. Upload the updated source to the same repository: `index.html`, `style.css`, `package.json`, `package-lock.json`, `vite.config.js`, `src/`, the referenced images under `projects/`, and `.github/workflows/deploy.yml`. Include the `tests/` folder if you want to run the checks locally. Do not upload `node_modules/`.
2. In **Settings → Pages → Build and deployment**, change **Source** from **Deploy from a branch** to **GitHub Actions**.
3. The included **Deploy portfolio to GitHub Pages** workflow builds and publishes on updates to `main`. It can also be started from **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. Wait for the deployment's green check, then use **Settings → Pages → Visit site**.

The relative build paths work for both `username.github.io` and `username.github.io/repository/`. Uploading only `index.html` and `style.css` is no longer sufficient: React must be built first.

Alternatively, after `npm run build`, publish the **contents** of `dist/` as a plain static site using your existing branch-publishing setup. Do not mix this option with uploading the React source entry page to that publishing folder.

Only upload project screenshots approved for public use. This conversion does not publish anything automatically from your computer.
