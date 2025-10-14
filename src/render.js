import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { ExperienceCard } from "./components/experienceCard.js";

export function renderApp({ mount, content, lang, onLangChange }) {
  const parts = [];
  
  const header = Header({ content, lang, onLangChange });
  parts.push(header.html);
  
  parts.push(Hero({ content, lang }));
  
  const expHtml = `
    <section id="experience" class="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      ${(content.experience || []).map(item => ExperienceCard({ item, lang })).join("")}
    </section>
  `;
  parts.push(expHtml);
  
  mount.innerHTML = parts.join("");
  header.attach(mount);
}