import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span>💻</span>
          CS for Each
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link></li>
          <li><Link to="/programs" className={isActive('/programs') ? 'active-link' : ''}>Programs</Link></li>
          <li><Link to="/team" className={isActive('/team') ? 'active-link' : ''}>Team</Link></li>
          <li><Link to="/resources" className={isActive('/resources') ? 'active-link' : ''}>Resources</Link></li>
          <li><Link to="/contact" className="cta-button">Get Involved</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;