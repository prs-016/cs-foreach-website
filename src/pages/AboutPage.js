import React, { useEffect } from 'react';
import { initScrollReveal } from '../utils/animations';

const AboutPage = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section scroll-reveal" style={{ padding: '4rem 2rem' }}>
        <div className="two-column-grid">
          <div className="scroll-reveal">
            <img 
              src="https://via.placeholder.com/600x556/E8F4FD/4A90E2?text=Blob"
              alt="Decorative blob"
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </div>
          <div className="scroll-reveal">
            <p className="hero-description" style={{ marginBottom: 0 }}>
              CS foreach is a student-run organization at UC San Diego that aims to increase equity and access in computer science education through our various programs. We work with educators throughout San Diego to teach and mentor traditionally underserved K-12 students.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="section scroll-reveal">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            ABOUT
          </h2>
          <img 
            src="https://via.placeholder.com/600x472/4A90E2/FFFFFF?text=CS+foreach+Team"
            alt="CS foreach team"
            className="scroll-reveal"
            style={{ 
              width: '100%', 
              maxWidth: '600px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              marginTop: '2rem'
            }}
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">
          UPCOMING EVENTS
        </h2>
        {/* Events content would go here if available */}
      </section>
    </div>
  );
};

export default AboutPage;