import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>About CS for Each</h1>
        <p>Our mission, vision, and commitment to accessible computer science education for all</p>
      </div>

      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title">Our Mission</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', color: 'var(--medium-gray)', marginBottom: '3rem', textAlign: 'center' }}>
            CS for Each is dedicated to democratizing computer science education by providing 
            free, high-quality learning opportunities to students from all backgrounds. We believe 
            that every student deserves the chance to explore technology and develop the skills 
            needed to thrive in our digital world.
          </p>

          <div className="features-grid" style={{ marginBottom: '4rem' }}>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                A world where every student has access to quality computer science education, 
                regardless of their socioeconomic background, location, or prior experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Our Values</h3>
              <p>
                Inclusivity, accessibility, excellence, and empowerment guide everything we do. 
                We're committed to creating a welcoming environment for all learners.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Our Impact</h3>
              <p>
                Through partnerships, workshops, and mentorship, we're building a diverse 
                pipeline of future technologists and problem-solvers.
              </p>
            </div>
          </div>

          <h2 className="section-title">What We Do</h2>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--dark-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Free Education Programs
              </h3>
              <p style={{ color: 'var(--medium-gray)', lineHeight: '1.8' }}>
                We offer completely free coding workshops, bootcamps, and courses in various 
                programming languages and technologies. Our curriculum is designed to be 
                engaging, practical, and aligned with industry needs.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--dark-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                School Partnerships
              </h3>
              <p style={{ color: 'var(--medium-gray)', lineHeight: '1.8' }}>
                We work directly with schools to integrate computer science into their curriculum, 
                provide teacher training, and supply resources that make CS education sustainable 
                and effective.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--dark-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Mentorship & Career Support
              </h3>
              <p style={{ color: 'var(--medium-gray)', lineHeight: '1.8' }}>
                Our mentorship program connects students with industry professionals who provide 
                guidance, support, and real-world insights. We also offer resume reviews, 
                interview prep, and career counseling.
              </p>
            </div>
          </div>

          <div className="stats-section" style={{ borderRadius: '15px', marginBottom: '3rem' }}>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students Reached</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Workshops Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Partner Schools</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Programs</div>
              </div>
            </div>
          </div>

          <h2 className="section-title">Our Story</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--medium-gray)', marginBottom: '2rem' }}>
            CS for Each was founded in 2020 by a group of educators and technologists who saw 
            a critical gap in computer science education. While technology was becoming increasingly 
            important in every field, many students lacked access to quality CS learning opportunities.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--medium-gray)', marginBottom: '2rem' }}>
            What started as a small after-school coding club has grown into a comprehensive program 
            serving hundreds of students across multiple schools. We've built partnerships with 
            tech companies, recruited passionate mentors, and developed a curriculum that makes 
            computer science accessible and exciting.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--medium-gray)', marginBottom: '3rem' }}>
            Today, we're proud to be making a real difference in students' lives, opening doors 
            to opportunities they might not have had otherwise, and building a more diverse and 
            inclusive tech community.
          </p>

          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" className="btn-primary">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;