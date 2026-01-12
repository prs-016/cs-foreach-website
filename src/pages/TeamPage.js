import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initScrollReveal } from '../utils/animations';

const TeamPage = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  const teamMembers = [
    { name: 'Person 1', role: 'President', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=MP' },
    { name: 'Person 2', role: 'Co-Director of Curriculum', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=KN' },
    { name: 'Person 3', role: 'VP External', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=KR' },
    { name: 'Person 4', role: 'Co-Director of Curriculum', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=SV' },
    { name: 'Person 5', role: 'VP Internal', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=JP' },
    { name: 'Person 6', role: 'Director of TritonHacks', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=BL' },
    { name: 'Person 7', role: 'VP Finance', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=AA' },
    { name: 'Person 8', role: 'Co-Director of Early Start', image: 'https://via.placeholder.com/124x123/4A90E2/FFFFFF?text=YC' },
    { name: 'Person 9', role: 'Co-Director of Early Start', image: 'https://via.placeholder.com/124x123/CCCCCC/666666?text=KN' },
    { name: 'Person 10', role: 'Co-Director of Design', image: 'https://via.placeholder.com/124x123/CCCCCC/666666?text=OR' },
    { name: 'Person 11', role: 'Co-Director of Design', image: 'https://via.placeholder.com/124x123/CCCCCC/666666?text=AH' },
    { name: 'Person 12', role: 'Head of Engagement', image: 'https://via.placeholder.com/124x123/CCCCCC/666666?text=KN' }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section scroll-reveal" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 className="hero-title">
          MEET OUR TEAM
        </h1>
        <p className="hero-description">
          Dedicated educators, engineers, and advocates working together to make a difference in computer science education.
        </p>
      </section>

      {/* Team Grid Section */}
      <section className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member scroll-reveal">
              <img 
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
              <h3 className="team-name">
                {member.name}
              </h3>
              <p className="team-role">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section scroll-reveal">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Join Our Team
          </h2>
          <p className="section-subtitle">
            We're always looking for passionate individuals who want to make a difference in computer science education. Whether you want to volunteer, mentor, or join our organization, we'd love to hear from you.
          </p>
          <div className="hero-buttons">
            <Link to="/get-involved" className="btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;