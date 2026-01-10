import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/project-1.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/project-2.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that provides real-time weather information and forecasts.',
      technologies: ['React', 'API Integration', 'CSS3'],
      image: '/project-3.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media metrics with data visualization and insights.',
      technologies: ['React', 'Chart.js', 'Node.js'],
      image: '/project-4.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and professional experience.',
      technologies: ['React', 'CSS3', 'Responsive Design'],
      image: '/project-5.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for blogging with rich text editing and comment features.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project-6.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
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
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/ff6b6b/ffffff?text=${encodeURIComponent(project.title)}`;
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

