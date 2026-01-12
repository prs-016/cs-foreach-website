import React from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Executive Director',
      bio: 'Former software engineer passionate about making CS education accessible to all students.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'Sarah worked as a software engineer at major tech companies for 8 years before founding CS for Each. She holds a BS in Computer Science from MIT and is passionate about creating pathways for underrepresented students in tech.',
      expertise: ['Leadership', 'Curriculum Development', 'Software Engineering'],
      email: 'sarah@csforeach.org'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Programs',
      bio: 'Experienced educator specializing in curriculum development and student engagement.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'With 12 years of teaching experience, Michael designs engaging CS curricula that meet students where they are. He previously taught AP Computer Science and led CS initiatives at several high schools.',
      expertise: ['Curriculum Design', 'Education', 'Project-Based Learning'],
      email: 'michael@csforeach.org'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach Lead',
      bio: 'Building partnerships with schools and communities to expand our reach and impact.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'Emily has built relationships with over 25 schools and community organizations. Her background in nonprofit management and community organizing helps CS for Each reach students who need it most.',
      expertise: ['Partnership Development', 'Community Engagement', 'Nonprofit Management'],
      email: 'emily@csforeach.org'
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      bio: 'Full-stack developer creating tools and resources for students and educators.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'David builds the platforms and tools that power CS for Each\'s programs. He specializes in creating intuitive learning platforms and has contributed to open-source education projects.',
      expertise: ['Full-Stack Development', 'EdTech', 'Open Source'],
      email: 'david@csforeach.org'
    },
    {
      name: 'Aisha Patel',
      role: 'Mentor Coordinator',
      bio: 'Connecting students with industry mentors and managing our mentorship program.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'Aisha manages our network of 50+ volunteer mentors from top tech companies. She ensures quality matches and meaningful relationships that help students achieve their goals.',
      expertise: ['Mentorship', 'Career Guidance', 'Relationship Building'],
      email: 'aisha@csforeach.org'
    },
    {
      name: 'James Williams',
      role: 'Workshop Instructor',
      bio: 'Teaching Python, web development, and inspiring the next generation of coders.',
      photo: 'https://via.placeholder.com/180',
      fullBio: 'James brings 5 years of industry experience to the classroom. His engaging teaching style and real-world examples make complex concepts accessible and exciting for students.',
      expertise: ['Python', 'Web Development', 'Teaching'],
      email: 'james@csforeach.org'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Lisa Martinez',
      role: 'Educational Advisor',
      bio: 'Professor of Computer Science Education at Stanford University',
      photo: 'https://via.placeholder.com/150'
    },
    {
      name: 'Alex Thompson',
      role: 'Industry Advisor',
      bio: 'VP of Engineering at a major tech company',
      photo: 'https://via.placeholder.com/150'
    },
    {
      name: 'Priya Sharma',
      role: 'Diversity & Inclusion Advisor',
      bio: 'Founder of Women in Tech Initiative',
      photo: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Meet Our Team</h1>
        <p>Passionate educators, engineers, and advocates dedicated to making a difference</p>
      </div>

      <section className="section">
        <h2 className="section-title">Leadership Team</h2>
        <p className="section-subtitle">
          Our team brings together expertise in education, technology, and community building
        </p>

        {teamMembers.map((member, index) => (
          <div key={index} style={{ 
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '200px 1fr' : '1fr',
            gap: '2rem',
            alignItems: 'start',
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={member.photo} 
                alt={member.name}
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '5px solid var(--light-blue)',
                  marginBottom: '1rem'
                }}
              />
            </div>

            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: 'var(--dark-blue)',
                marginBottom: '0.5rem'
              }}>
                {member.name}
              </h3>
              <p style={{ 
                color: 'var(--primary-blue)', 
                fontWeight: 600,
                fontSize: '1.1rem',
                marginBottom: '1rem'
              }}>
                {member.role}
              </p>
              <p style={{ 
                color: 'var(--medium-gray)', 
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                {member.fullBio}
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: 'var(--dark-blue)', 
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  Expertise:
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} style={{
                      background: 'var(--light-blue)',
                      color: 'var(--primary-blue)',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a href={`mailto:${member.email}`} style={{
                color: 'var(--primary-blue)',
                textDecoration: 'none',
                fontWeight: 500
              }}>
                📧 {member.email}
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">Advisory Board</h2>
        <p className="section-subtitle">
          Experienced leaders who guide our strategy and ensure our programs deliver real impact
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {advisors.map((advisor, index) => (
            <div key={index} style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <img 
                src={advisor.photo} 
                alt={advisor.name}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--light-blue)',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--dark-blue)',
                marginBottom: '0.5rem'
              }}>
                {advisor.name}
              </h3>
              <p style={{ 
                color: 'var(--primary-blue)', 
                fontWeight: 600,
                marginBottom: '0.8rem'
              }}>
                {advisor.role}
              </p>
              <p style={{ color: 'var(--medium-gray)', lineHeight: '1.6' }}>
                {advisor.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Join Our Team</h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--medium-gray)', 
          marginBottom: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          We're always looking for passionate individuals who want to make a difference in 
          computer science education. Whether you want to volunteer, mentor, or join our staff, 
          we'd love to hear from you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">Become a Volunteer</Link>
          <Link to="/contact" className="btn-secondary">Join as a Mentor</Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;