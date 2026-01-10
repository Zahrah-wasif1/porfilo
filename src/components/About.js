import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Zahrah Wasif, a passionate developer and designer based in Pakistan. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between.
            </p>
            <p>
              My goal is to always build products that provide pixel-perfect, performant experiences 
              while delivering innovative solutions to complex problems.
            </p>
            <p>
              I have experience working with modern web technologies and frameworks, and I'm always 
              eager to learn new tools and techniques to stay ahead in the ever-evolving tech landscape.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">50+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">20+</span>
                <span className="highlight-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

