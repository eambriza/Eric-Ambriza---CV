import React, { useMemo, useState } from 'react';

function uniqueCategories(projects) {
  const set = new Set(projects.map(p => (p.category || 'Other').split(/[,/]/)[0].trim()));
  return ['All', ...Array.from(set).sort()];
}

const Portfolio = ({ data }) => {
  const projects = (data && data.projects) || [];
  const categories = useMemo(() => uniqueCategories(projects), [projects]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => (p.category || '').toLowerCase().includes(activeCategory.toLowerCase()));
  }, [projects, activeCategory]);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Recent Work</h1>

          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`button btn ${cat === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map(project => {
              const projectImage = 'images/portfolio/' + project.image;
              return (
                <article key={project.title} className="portfolio-card">
                  <a href={project.url} title={project.title} target="_blank" rel="noreferrer">
                    <div className="thumb-wrap">
                      <img alt={project.title} src={projectImage} loading="lazy" />
                    </div>
                    <div className="meta">
                      <h5>{project.title}</h5>
                      <p>{project.category}</p>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
