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
  Hello! I'm Zahrah Wasif, a dedicated Backend Developer based in Lahore, Pakistan. 
  I specialize in building secure, scalable, and high-performance server-side applications 
  using Node.js, Express.js, and NestJS.
</p>
<p>
  I have hands-on experience designing RESTful APIs, implementing authentication and 
  authorization systems using JWT and bcrypt, and managing databases including MongoDB, 
  MySQL, and PostgreSQL. I focus on writing clean, maintainable code and structuring 
  backend systems using the MVC architecture pattern.
</p>
<p>
  Currently, I am working as a Backend Developer at Creative Code Tech, where I develop 
  production-ready backend services, optimize database queries, and ensure seamless 
  frontend–backend integration. I am passionate about backend architecture, data security, 
  and continuously improving my technical skills to build robust and efficient systems.
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

