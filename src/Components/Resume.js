import React, { useMemo } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Resume = ({ data }) => {
  if (!data) return null;

  const education = useMemo(() => (data.education || []).map((edu) => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className="info">
        {edu.degree} <span>&bull;</span>
        <em className="date">{edu.graduated}</em>
      </p>
      {edu.description && <p>{edu.description}</p>}
    </div>
  )), [data]);

  const work = useMemo(() => (data.work || []).map((job) => (
    <div key={job.company}>
      <h3>{job.company}</h3>
      <p className="info">
        {job.title}
        <span>&bull;</span> <em className="date">{job.years}</em>
      </p>
      <p>{job.description}</p>
    </div>
  )), [data]);

  const skills = useMemo(() => (data.skills || []).map((skill) => {
    const className = 'bar-expand ' + (skill.name || '').toLowerCase();
    return (
      <li key={skill.name}>
        <span style={{ width: skill.level, backgroundColor: getRandomColor() }} className={className}></span>
        <em>{skill.name}</em>
      </li>
    );
  }), [data]);

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{data.skillmessage}</p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
