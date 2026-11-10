import '../index.css';
import './docs.css';
import { setupMotion } from '../motion';
import { setupSmoothScroll, scrollToSection } from '../utils/scroll';

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
let cleanup = () => {};
const start = () => {
  cleanup();
  const stopScroll = setupSmoothScroll();
  const stopMotion = setupMotion();
  cleanup = () => { stopMotion(); stopScroll(); cleanup = () => {}; };
};
start();
window.addEventListener('pagehide', () => cleanup());
window.addEventListener('pageshow', event => { if (event.persisted) start(); });

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
  if (!link || link.matches('.docs-skip') || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  let id: string;
  try { id = decodeURIComponent(link.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  if (contents?.contains(link) && !desktop.matches) contents.open = false;
  if (event.detail === 0) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  scrollToSection(id, true)();
  if (window.location.hash !== link.hash) {
    window.history.pushState(null, '', link.hash);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
});
