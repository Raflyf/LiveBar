import '../index.css';
import './docs.css';

const isIndonesian = document.documentElement.lang === 'id';
const switcher = document.querySelector<HTMLButtonElement>('[data-docs-theme]');
const syncTheme = () => {
  const dark = document.documentElement.dataset.theme !== 'light';
  switcher?.setAttribute('aria-checked', String(dark));
};
syncTheme();
switcher?.removeAttribute('disabled');
switcher?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch { /* Keep the choice for this page. */ }
  syncTheme();
});
try { localStorage.setItem('lang', isIndonesian ? 'id' : 'en'); } catch { /* Storage is optional. */ }

for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-docs-language]')) {
  link.hash = window.location.hash;
}
window.addEventListener('hashchange', () => {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-docs-language]')) link.hash = window.location.hash;
});

const contents = document.querySelector<HTMLDetailsElement>('.docs-contents');
const desktop = window.matchMedia('(min-width: 960px)');
const syncContents = () => { if (contents) contents.open = desktop.matches; };
syncContents();
desktop.addEventListener('change', syncContents);
contents?.addEventListener('click', event => {
  if (!desktop.matches && event.target instanceof Element && event.target.closest('a')) contents.open = false;
});
