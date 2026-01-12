import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { initScrollReveal, typewriterEffect } from '../utils/animations';

const Home = () => {
  const heroTitleRef = useRef(null);
  const [typewriterDone, setTypewriterDone] = useState(false);

  useEffect(() => {
    // Initialize scroll reveal
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  useEffect(() => {
    if (heroTitleRef.current && !typewriterDone) {
      typewriterEffect(
        heroTitleRef.current, 
        'Striving for Equity and Access in Computer Science Education',
        50,
        () => setTypewriterDone(true)
      );
    }
  }, [typewriterDone]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative graphics */}
        <img 
          src="https://via.placeholder.com/170x170/E8F4FD/4A90E2?text=G1"
          alt="graphic 1"
          className="decorative-graphic scroll-reveal"
          style={{ top: '50px', left: '10%', width: '170px' }}
        />
        <img 
          src="https://via.placeholder.com/263x263/E8F4FD/4A90E2?text=G2"
          alt="graphic 2"
          className="decorative-graphic scroll-reveal"
          style={{ bottom: '100px', right: '15%', width: '263px' }}
        />
        <img 
          src="https://via.placeholder.com/335x335/E8F4FD/4A90E2?text=G3"
          alt="graphic 3"
          className="decorative-graphic scroll-reveal"
          style={{ top: '200px', right: '5%', width: '335px', opacity: 0.4 }}
        />

        <div className="hero-content">
          <h1 className="hero-title">
            <span ref={heroTitleRef}></span>
          </h1>
          <p className="hero-description scroll-reveal">
            Dedicated to making computer science a more ubiquitous field, CS foreach is a student organization at UC San Diego that strives to make access to CS opportunities and resources more equitable for each and every student.
          </p>
          <div className="hero-buttons scroll-reveal">
            <Link to="/get-involved" className="btn-primary">
              GET INVOLVED
            </Link>
            <Link to="/partners" className="btn-primary">
              SCHEDULE A WORKSHOP
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section scroll-reveal">
        <div className="two-column-grid">
          <div className="scroll-reveal">
            <img 
              src="https://via.placeholder.com/600x545/E8F4FD/4A90E2?text=About+Us"
              alt="About CS foreach"
              style={{ width: '100%', borderRadius: '15px' }}
            />
          </div>
          <div className="scroll-reveal">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              ABOUT US
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--medium-gray)', marginBottom: '2rem' }}>
              CS foreach is a student-run organization at UC San Diego that aims to increase equity and access in computer science education through our various programs. We work with educators throughout San Diego to teach and mentor traditionally underserved K-12 students.
            </p>
            <Link to="/about" className="btn-primary">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="section scroll-reveal" style={{ background: 'var(--light-gray)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title scroll-reveal">
            OUR PROGRAMS
          </h2>
          <p className="section-subtitle scroll-reveal">
            Our organization runs 3 different programs to teach and mentor students: Curriculum, TritonHacks, and Early Start. Learn more about each program below!
          </p>

          <div className="three-column-grid">
            {/* TritonHacks Card */}
            <div className="card scroll-reveal">
              <img 
                src="https://via.placeholder.com/63x71/FF6B35/FFFFFF?text=TH"
                alt="TritonHacks Logo"
                className="card-icon"
              />
              <h3 className="card-title">
                TritonHacks
              </h3>
              <p className="card-description">
                A beginner-friendly high school hackathon that includes project kits, workshops, and mentors.
              </p>
              <Link to="/programs" className="card-link">
                LEARN MORE
              </Link>
            </div>

            {/* Curriculum Card */}
            <div className="card scroll-reveal">
              <img 
                src="https://via.placeholder.com/103x81/4A90E2/FFFFFF?text=C"
                alt="Curriculum Logo"
                className="card-icon"
              />
              <h3 className="card-title">
                Curriculum
              </h3>
              <p className="card-description">
                Runs CS workshops year-round to provide supplementary material to school curriculum.
              </p>
              <Link to="/programs" className="card-link">
                LEARN MORE
              </Link>
            </div>

            {/* Early Start Card */}
            <div className="card scroll-reveal">
              <img 
                src="https://via.placeholder.com/87x73/2E5C8A/FFFFFF?text=ES"
                alt="Early Start Logo"
                className="card-icon"
              />
              <h3 className="card-title">
                Early Start
              </h3>
              <p className="card-description">
                15-week program that matches high schoolers with UCSD students to work on a CS project.
              </p>
              <Link to="/programs" className="card-link">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="section scroll-reveal">
        <div className="two-column-grid">
          <div className="scroll-reveal">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              OUR IMPACT
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--medium-gray)', marginBottom: '3rem' }}>
              Through our efforts, we've been able to build up our organization and create meaningful computer science opportunities for students in our community.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--medium-gray)', marginBottom: '2rem', fontStyle: 'italic' }}>
              During the 2022 - 2023 school year...
            </p>

            {/* Stats */}
            <div>
              <div className="stat-item scroll-reveal">
                <div className="stat-number">50</div>
                <p className="stat-label">active organization members</p>
              </div>

              <div className="stat-item scroll-reveal">
                <div className="stat-number">7</div>
                <p className="stat-label">schools we work with in San Diego</p>
              </div>

              <div className="stat-item scroll-reveal">
                <div className="stat-number">25</div>
                <p className="stat-label">workshops provided<br/>(and counting!)</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <img 
              src="https://via.placeholder.com/600x614/4A90E2/FFFFFF?text=Our+Impact"
              alt="Our Impact"
              style={{ width: '100%', borderRadius: '15px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;