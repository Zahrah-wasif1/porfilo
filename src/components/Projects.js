import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
  {
    id: 1,
    title: 'Domino Game Backend',
    description:
      'A secure and scalable backend system for a real-time Domino game. Handles gameplay logic, user authentication, match management, wallet transactions, and database operations.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
    image: '/images/domino-game.png',
    github: 'https://github.com/Zahrah-wasif1',
    live: ''
  },
  {
    id: 2,
    title: 'Brawl Gaming Platform',
    description:
      'A gaming platform backend developed using NestJS with Firebase integration. Implements authentication, real-time features, and scalable modular architecture.',
    technologies: ['NestJS', 'Firebase', 'Node.js', 'REST API'],
    image: '/images/brawl-platform.png',
    github: 'https://github.com/Zahrah-wasif1',
    live: ''
  },
  {
    id: 3,
    title: 'Guard House Management System',
    description:
      'Backend system for managing security operations, visitors, and staff. Built RESTful APIs using Node.js, Express.js, and MongoDB with secure authentication and role-based access.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'MVC Architecture'],
    image: '/images/guardhouse-system.png',
    github: 'https://github.com/Zahrah-wasif1',
    live: ''
  }
];
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Featured Projects
        </h2>
        <p className="section-subtitle">
          Here are some of my recent projects that I'm proud of
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80`;
                  }}
                />
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

