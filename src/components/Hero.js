import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Zahrah Wasif</h1>
            <p className="hero-title">Full Stack Developer & UI/UX Designer</p>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              I love turning complex problems into simple, elegant solutions.
            </p>
            <div className="hero-buttons">
              <a 
                href="https://www.linkedin.com/in/zahrah-wasif12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View LinkedIn
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
            </div>
            <div className="hero-social">
              <a 
                href="https://www.linkedin.com/in/zahrah-wasif12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:zahrah.wasif@example.com" 
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>ZW</span>
                </div>
              </div>
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;

