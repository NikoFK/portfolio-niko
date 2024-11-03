import React from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Founder',
    company: 'FKS Projects.',
    period: '2022 - Present',
    description: 'I specialized in short film production, video editing, graphic design, and art direction. Proficient in Adobe Premiere Pro, After Effects, and Photoshop, I managed projects and created captivating content, fueling my passion for visual storytelling.',
  },
  {
    title: 'Brand Designer',
    company: 'Archipelago Inc',
    period: '2022 - 2023',
    description: 'I designed official merchandise endorsed by President Joko Widodo. I created visually captivating designs aligned with the brands values, collaborating closely with the team to ensure audience resonance. This experience reinforced my commitment to delivering exceptional design solutions for prominent brands.',
  },
  {
    title: 'Content Editor',
    company: 'AHS Helmet',
    period: '2020 - 2022',
    description: 'I gained 2 years of experience in short film production, video editing, graphic design, and art direction. Proficient in Adobe Premiere Pro, After Effects, and Photoshop, I managed YouTube content and enhanced my skills in graphic design and illustration, fueling my passion for visual storytelling.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;