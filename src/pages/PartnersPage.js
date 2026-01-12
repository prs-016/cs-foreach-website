import React, { useEffect } from 'react';
import { initScrollReveal } from '../utils/animations';

const PartnersPage = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  const schools = [
    'Montgomery High School',
    'Mount Miguel High School',
    'Olympian High School',
    'Dimensions Collaborative',
    'Helix High School',
    'Monarch School',
    'Monte Vista High School'
  ];

  const sponsors = [
    { name: 'UCSD CSE', url: 'https://cse.ucsd.edu/', logo: 'https://via.placeholder.com/278x155/4A90E2/FFFFFF?text=UCSD+CSE' },
    { name: 'CSTA San Diego', url: 'https://sandiego.csteachers.org/', logo: 'https://via.placeholder.com/278x155/2E5C8A/FFFFFF?text=CSTA' },
    { name: 'CREATE', url: 'https://create.ucsd.edu/', logo: 'https://via.placeholder.com/278x155/4A90E2/FFFFFF?text=CREATE' },
    { name: 'Code.org', url: 'https://code.org/', logo: 'https://via.placeholder.com/278x155/7665D0/FFFFFF?text=Code.org' },
    { name: 'IDEA Engineering', url: 'https://jacobsschool.ucsd.edu/idea', logo: 'https://via.placeholder.com/278x155/FFB81C/FFFFFF?text=IDEA' },
    { name: 'Google Cloud', url: 'https://cloud.google.com/', logo: 'https://via.placeholder.com/278x155/4285F4/FFFFFF?text=Google' },
    { name: 'NetApp', url: 'https://www.netapp.com/', logo: 'https://via.placeholder.com/278x155/0067C5/FFFFFF?text=NetApp' },
    { name: 'Trace3', url: 'https://www.trace3.com/', logo: 'https://via.placeholder.com/278x155/00A4E4/FFFFFF?text=Trace3' },
    { name: 'GitHub', url: '#', logo: 'https://via.placeholder.com/278x155/24292E/FFFFFF?text=GitHub' }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section scroll-reveal" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 className="hero-title">
          PARTNERS
        </h1>
      </section>

      {/* Schools We Work With Section */}
      <section className="section scroll-reveal">
        <h2 className="section-title" style={{ fontSize: '2rem' }}>
          SCHOOLS WE WORK WITH
        </h2>
        <p className="section-subtitle">
          We partner with K-12 schools in the San Diego community to host workshops and mentorship programs. If you are an educator and you'd like to be involved with our organization, email us at{' '}
          <a href="mailto:csforeach@ucsd.edu" style={{ color: 'var(--primary-blue)' }}>
            csforeach@ucsd.edu
          </a>
          {' '}or fill out our contact form and we will follow up with you!
        </p>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <a 
            href="https://tinyurl.com/3hjmjyhc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            CONTACT FORM
          </a>
        </div>

        {/* School List with Graphics */}
        <div className="school-list-grid">
          <div className="school-list-box scroll-reveal">
            <img 
              src="https://via.placeholder.com/355x414/E8F4FD/4A90E2?text=Schools+Group+1"
              alt="Schools graphic 1"
              className="school-list-image"
            />
            {schools.slice(0, 3).map((school, index) => (
              <div key={index} className="school-item">
                <span className="school-arrow">➤</span>
                {school}
              </div>
            ))}
          </div>

          <div className="school-list-box scroll-reveal">
            <img 
              src="https://via.placeholder.com/365x414/E8F4FD/4A90E2?text=Schools+Group+2"
              alt="Schools graphic 2"
              className="school-list-image"
            />
            {schools.slice(3).map((school, index) => (
              <div key={index} className="school-item">
                <span className="school-arrow">➤</span>
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">
          SPONSORS
        </h2>
        <p className="section-subtitle">
          Learn more about the amazing organizations and companies that support us!
        </p>

        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card scroll-reveal"
            >
              <img 
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Interested in Working With Us Section */}
      <section className="section scroll-reveal">
        <div className="cta-box">
          <h2 className="cta-title">
            INTERESTED IN WORKING WITH US?
          </h2>
          <p className="cta-description">
            Fill out this form to leave us a message and we'll get back to you as soon as possible!
          </p>
          <a 
            href="https://tinyurl.com/3hjmjyhc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            OPEN FORM
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;