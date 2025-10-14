import { t } from "../i18n.js";
import { esc } from "../sanitize.js";

export function ExperienceCard({ item, lang }) {
  const bullets = (item.bullets?.[lang] || item.bullets?.en || [])
    .map(b => `<li>${esc(b)}</li>`)
    .join("");

  return `
    <article class="exp-card">
      <h3 class="exp-title">${esc(t(item.title, lang))} · ${esc(item.company)}</h3>
      <p class="exp-period">${esc(item.period)}</p>
      <ul class="exp-bullets">${bullets}</ul>
    </article>
  `;
}