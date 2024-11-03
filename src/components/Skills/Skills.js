import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'UI Design', level: 90 },
  { name: 'UX Design', level: 85 },
  { name: 'Filmmaking', level: 80 },
  { name: 'Certified Video Editing', level: 98 },
  { name: 'Videography', level: 95 },
  { name: 'Photography', level: 90 },
  { name: 'Adobe Creative Suite', level: 85 },
  { name: 'Filmmaking', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;