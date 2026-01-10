import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPython, SiBootstrap } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Node.js', icon: <FaNode />, level: 80 },
    { name: 'Express', icon: <SiExpress />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 70 },
    { name: 'Python', icon: <SiPython />, level: 70 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Figma', icon: <FaFigma />, level: 80 },
    { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Skills & Technologies
        </h2>
        <p className="section-subtitle">
          Here are some of the technologies and tools I work with
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

