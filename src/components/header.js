import { t } from '../i18n.js';
import { esc } from '../sanitize.js';

export function Header({ content, lang, onLangChange }) {
  const n = content.nav;
  const langs = content.langs || ['en'];

  const buttons = langs
    .map((code) => {
      const active = code === lang ? ' aria-current="true"' : '';
      return `<button class="lang-btn" data-lang="${esc(code)}"${active}>${esc(code.toUpperCase())}</button>`;
    })
    .join('');

  const html = `
    <header role="banner" class="site-header">
      <nav aria-label="Primary" class="site-nav">
        <a href="#about">${esc(t(n.about, lang))}</a>
        <a href="#skills">${esc(t(n.skills, lang))}</a>
        <a href="#projects">${esc(t(n.projects, lang))}</a>
        <a href="#experience">${esc(t(n.experience, lang))}</a>
        <a href="#contact">${esc(t(n.contact, lang))}</a>
      </nav>
      <div class="lang-switch" role="group" aria-label="Language">
        ${buttons}
      </div>
    </header>
  `;

  return {
    html,
    attach(root) {
      root.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => onLangChange(btn.dataset.lang));
      });
    },
  };
}
