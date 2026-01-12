import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-left">
          <Link to="/">
            <img 
              src="https://via.placeholder.com/166x40/FFFFFF/4A90E2?text=CS+foreach" 
              alt="CS foreach logo"
              className="footer-logo"
            />
          </Link>
          <div className="footer-nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/programs">PROGRAMS</Link>
            <Link to="/team">TEAM</Link>
            <Link to="/partners">PARTNERS</Link>
          </div>
        </div>

        <div className="footer-center">
          <a 
            href="http://eepurl.com/ik8qiv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="newsletter-link"
          >
            Sign up for our weekly newsletter!
          </a>
          <p className="copyright">© 2024 by CS foreach</p>
        </div>

        <div className="footer-social">
          <a href="https://discord.gg/zQRdJJxh2m" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/39x40/5865F2/FFFFFF?text=D" alt="Discord" />
          </a>
          <a href="https://www.instagram.com/csforeach/" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/39x40/E4405F/FFFFFF?text=I" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/csforeach/" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/39x40/0077B5/FFFFFF?text=L" alt="LinkedIn" />
          </a>
          <a href="mailto:csforeach@ucsd.edu">
            <img src="https://via.placeholder.com/39x40/EA4335/FFFFFF?text=E" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;