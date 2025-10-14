import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { ExperienceCard } from './components/experienceCard.js';
import { t } from './i18n.js';
import { esc } from './sanitize.js';

export function renderApp({ mount, content, lang, onLangChange }) {
  const parts = [];

  const header = Header({ content, lang, onLangChange });
  parts.push(header.html);

  parts.push(Hero({ content, lang }));

  // Skills section (only if content.skills?.list exists)
  const skills = (content.skills?.list || []).map((s) => `<li>${esc(s)}</li>`).join('');
  const skillsHtml = skills
    ? `
    <section id="skills" class="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">${esc(t(content.nav?.skills || { en: 'Skills' }, lang))}</h2>
      <ul class="skills-list">${skills}</ul>
    </section>
  `
    : '';
  parts.push(skillsHtml);

  // Experience section with translated title
  const sec = content.sections || {};
  const experienceTitle = t(sec.experience || 'Experience', lang);
  const expHtml = `
    <section id="experience" class="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">${esc(experienceTitle)}</h2>
      ${(content.experience || []).map((item) => ExperienceCard({ item, lang })).join('')}
    </section>
  `;
  parts.push(expHtml);

  mount.innerHTML = parts.join('');
  header.attach(mount);
}
