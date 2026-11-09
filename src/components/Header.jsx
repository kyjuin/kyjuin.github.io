import { useEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const themeLabel = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`;
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Theme switching works without storage. */ }
  }, [theme]);
  return (
<header className="frame-header">
        <a className="frame-brand" href="#home" aria-label="Home">
          <span className="frame-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21V13a9 9 0 0 1 18 0v8l-4 2H11l-4-2Z"/><path d="M10 13c3 0 6-2 7-5 1 3 3 4 5 5v3a6 6 0 0 1-12 0v-3Z"/><path d="M13 16h.01M19 16h.01m-7 11 1-5m6 0 1 5M5 29c1-5 5-7 8-7m6 0c3 0 7 2 8 7m-13-10c1 1 3 1 4 0"/></svg></span>
          <span className="brand-copy"><strong>Keong Yi Juin</strong><span>Personal / Portfolio</span></span>
        </a>
        <nav className="frame-nav" aria-label="Primary">
          <a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
          <button className="theme-toggle" type="button" aria-label={themeLabel} title={themeLabel} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <svg className="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
            <svg className="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z"/></svg>
            <span className="theme-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
      </header>
  );
}
