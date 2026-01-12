import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Executive Director',
      bio: 'Former software engineer passionate about making CS education accessible to all students.',
      photo: 'https://via.placeholder.com/180'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Programs',
      bio: 'Experienced educator specializing in curriculum development and student engagement.',
      photo: 'https://via.placeholder.com/180'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach Lead',
      bio: 'Building partnerships with schools and communities to expand our reach and impact.',
      photo: 'https://via.placeholder.com/180'
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      bio: 'Full-stack developer creating tools and resources for students and educators.',
      photo: 'https://via.placeholder.com/180'
    },
    {
      name: 'Aisha Patel',
      role: 'Mentor Coordinator',
      bio: 'Connecting students with industry mentors and managing our mentorship program.',
      photo: 'https://via.placeholder.com/180'
    },
    {
      name: 'James Williams',
      role: 'Workshop Instructor',
      bio: 'Teaching Python, web development, and inspiring the next generation of coders.',
      photo: 'https://via.placeholder.com/180'
    }
  ];

  return (
    <section id="team" className="section">
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtitle">
        Dedicated educators, engineers, and advocates working together to make a difference.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img 
              src={member.photo} 
              alt={member.name}
              className="team-photo"
            />
            <h3>{member.name}</h3>
            <div className="role">{member.role}</div>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;