import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About CS for Each</h2>
      <p className="section-subtitle">
        CS foreach is a student-run organization at UC San Diego that aims to increase equity and access in computer science education through our various programs. We work with educators throughout San Diego to teach and mentor traditionally underserved K-12 students.
      </p>
      <div className="hero-buttons" style={{ marginBottom: '5rem', borderRadius: '15px' }}>
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
      </div>
      <div className="section-title">Our Programs</div>
      <p className="section-subtitle">
        Our organization runs 3 different programs to teach and mentor students: Curriculum, TritonHacks, and Early Start. Learn more about each program below!
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔱</div>
          <h3>TritonHacks</h3>
          <p>
            A beginner-friendly high school hackathon that includes project kits, workshops, and mentors.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💻</div>
          <h3>Curriculum</h3>
          <p>
            Runs CS workshops year-round to provide supplementary material to school curriculum.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Early Start</h3>
          <p>
            15-week program that matches high schoolers with UCSD students to work on a CS project
          </p>
        </div>
      </div>

    <div className="section-title" style = {{marginTop:'5rem'}}>Our Impact</div>
      <p className="section-subtitle">
        Through our efforts, we’ve been able to build up our organization and create meaningful computer science opportunities for students in our community.


        During the 2024 - 2025 school year...</p>
      <div className="stats-section" style={{ marginTop: '4rem', borderRadius: '15px' }}>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Active organization members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">7</div>
            <div className="stat-label">Schools worked with in San Diego</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">workshops provided(and counting!)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;