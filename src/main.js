import { loadContent, pickLang } from './i18n.js';
import { renderApp } from './render.js';

const state = { lang: null, content: null };

function preferredLang(c) {
  const urlLang = new URLSearchParams(location.search).get('lang');
  const navLang = navigator.language?.slice(0, 2);
  return pickLang(c.langs || ['en'], urlLang || navLang, c.defaultLang || 'en');
}

function setLang(lang) {
  state.lang = lang;
  history.replaceState(null, '', `?lang=${lang}${location.hash || ''}`);
  render();
}

function render() {
  const mount = document.getElementById('app');
  if (!mount || !state.content || !state.lang) return;
  renderApp({ mount, content: state.content, lang: state.lang, onLangChange: setLang });

  // Secure external links
  document.querySelectorAll('a[target="_blank"]').forEach((a) => {
    if (!a.rel) a.rel = 'noopener noreferrer';
  });
}

(async function init() {
  state.content = await loadContent();
  state.lang = preferredLang(state.content);
  render();
  document
    .querySelectorAll("img[loading!='lazy']")
    .forEach((img) => img.setAttribute('loading', 'lazy'));

  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('/sw.js').catch(() => {}),
    );
  }

  // Language switch ARIA and keyboard management
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const grp = btn.closest('.lang-switch');
    grp?.querySelectorAll('.lang-btn').forEach((b) => b.removeAttribute('aria-current'));
    btn.setAttribute('aria-current', 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      e.preventDefault();
      btn.click();
    }
  });
})();
