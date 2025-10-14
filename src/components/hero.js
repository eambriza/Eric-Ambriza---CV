import { t } from "../i18n.js";
import { esc } from "../sanitize.js";

export function Hero({ content, lang }) {
  const h = content.hero;
  
  return `
    <section id="hero" class="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">${esc(t(h.headline, lang))}</h1>
      <p class="sub">${esc(t(h.sub, lang))}</p>
    </section>
  `;
}