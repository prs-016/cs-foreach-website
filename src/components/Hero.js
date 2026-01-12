import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Striving for <span className="hero-highlight">Equity and Access</span> in Computer Science Education
        </h1>
        <p>
          Dedicated to making computer science a more ubiquitous field, CS foreach is a student organization at UC San Diego that strives to make access to CS opportunities and resources more equitable for each and every student.
        </p>
        <div className="hero-buttons">
          <Link to="/programs" className="btn-primary">
            Get Involved!
          </Link>
          <Link to="/contact" className="btn-secondary">
            Any Questions?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;