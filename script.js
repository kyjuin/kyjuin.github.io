const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const updateThemeButton = () => {
    const isLight = document.documentElement.dataset.theme === 'light';
    const label = `Switch to ${isLight ? 'dark' : 'light'} mode`;
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
    themeToggle.querySelector('.theme-label').textContent = isLight ? 'Dark' : 'Light';
  };
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Switching still works without storage. */ }
    updateThemeButton();
  });
}

// Native dialogs keep keyboard focus inside the project and support Escape to close.
document.querySelectorAll('[data-project-open]').forEach((opener) => {
  const dialog = document.getElementById(opener.dataset.projectOpen);
  if (!dialog) return;

  opener.addEventListener('click', () => {
    if (dialog.open) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.classList.add('project-is-open');
  });

  dialog.querySelectorAll('[data-project-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('project-is-open');
    opener.focus({ preventScroll: true });
  });
});
