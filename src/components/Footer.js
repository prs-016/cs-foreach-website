import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CS for Each</h3>
          <p>Empowering every student through accessible computer science education.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li><Link to="/programs">Coding Workshops</Link></li>
            <li><Link to="/programs">School Partnerships</Link></li>
            <li><Link to="/programs">Mentorship</Link></li>
            <li><Link to="/programs">Hackathons</Link></li>
            <li><Link to="/programs">Career Prep</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get Involved</h3>
          <ul>
            <li><Link to="/contact">Become a Mentor</Link></li>
            <li><Link to="/contact">Volunteer</Link></li>
            <li><Link to="/contact">Partner With Us</Link></li>
            <li><Link to="/contact">Donate</Link></li>
            <li><Link to="/contact">Join Our Team</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CS for Each. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;