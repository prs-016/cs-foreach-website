import React from 'react';

const Programs = () => {
  const programs = [
    {
      icon: '👨‍💻',
      title: 'Coding Workshops',
      description: 'Interactive workshops covering Python, JavaScript, web development, and more. Perfect for beginners and intermediate learners.',
      details: ['Weekly sessions', 'Hands-on projects', 'Expert mentors']
    },
    {
      icon: '🏫',
      title: 'School Partnerships',
      description: 'We partner with schools to integrate computer science into their curriculum and provide teacher training.',
      details: ['Curriculum support', 'Teacher training', 'Student resources']
    },
    {
      icon: '🌟',
      title: 'Mentorship Program',
      description: 'One-on-one mentorship connecting students with industry professionals and college students in tech.',
      details: ['Personal guidance', 'Career advice', 'Project support']
    },
    {
      icon: '🎯',
      title: 'Hackathons & Events',
      description: 'Regular hackathons and tech events where students can showcase their skills and learn from peers.',
      details: ['Team projects', 'Prizes & recognition', 'Networking opportunities']
    },
    {
      icon: '📚',
      title: 'Resource Library',
      description: 'Free access to tutorials, coding challenges, and learning materials for self-paced learning.',
      details: ['Video tutorials', 'Practice problems', 'Study guides']
    },
    {
      icon: '💼',
      title: 'Career Prep',
      description: 'Resume building, interview preparation, and career guidance to help students succeed in tech.',
      details: ['Resume reviews', 'Mock interviews', 'Industry insights']
    }
  ];

  return (
    <section id="programs" className="section" style={{ background: 'var(--light-gray)' }}>
      <h2 className="section-title">Our Programs</h2>
      <p className="section-subtitle">
        Comprehensive programs designed to support students at every stage of their 
        computer science journey.
      </p>

      <div className="features-grid">
        {programs.map((program, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <ul style={{ 
              textAlign: 'left', 
              marginTop: '1rem', 
              color: 'var(--primary-blue)',
              listStyle: 'none',
              paddingLeft: 0
            }}>
              {program.details.map((detail, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  ✓ {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;