import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { typewriterEffect } from '../utils/animations';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const logoTextRef = useRef(null);
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

  useEffect(() => {
    // Retrigger logo typing each time location changes (navigation/reload)
    let cancel;
    if (logoTextRef.current) {
      // cancel any previous run (if present)
      if (typeof logoTextRef.current.__typewriterCancel === 'function') {
        logoTextRef.current.__typewriterCancel();
      }

      // clear text and flags so animation starts clean
      logoTextRef.current.textContent = '';
      logoTextRef.current.dataset.typed = 'false';
      logoTextRef.current.dataset.typing = 'false';
      setTypewriterComplete(false);

      cancel = typewriterEffect(logoTextRef.current, 'CS foreach', 180, () => {
        setTypewriterComplete(true);
      });
      // store cancel on the element for other callers
      if (logoTextRef.current) logoTextRef.current.__typewriterCancel = cancel;
    }

    return () => {
      if (typeof cancel === 'function') cancel();
    };
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span ref={logoTextRef} style={{ color: 'var(--primary-blue)' }}></span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active-link' : ''}>HOME</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active-link' : ''}>ABOUT</Link></li>
          <li><Link to="/programs" className={isActive('/programs') ? 'active-link' : ''}>PROGRAMS</Link></li>
          <li><Link to="/team" className={isActive('/team') ? 'active-link' : ''}>TEAM</Link></li>
          <li><Link to="/partners" className={isActive('/partners') ? 'active-link' : ''}>PARTNERS</Link></li>
          <li><Link to="/get-involved" className={`cta-button ${isActive('/get-involved') ? 'active-link' : ''}`}>GET INVOLVED</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;