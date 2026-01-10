import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Designed & Built with <FaHeart className="heart-icon" /> by Zahrah Wasif
            </p>
            <p className="copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>
          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/zahrah-wasif12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:zahrah.wasif@example.com" 
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

