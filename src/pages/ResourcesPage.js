import React from 'react';

const ResourcesPage = () => {
  // Replace with your actual Google Docs publish link
  const GOOGLE_DOC_EMBED_URL = 'https://docs.google.com/document/d/e/YOUR_DOCUMENT_ID/pub?embedded=true';

  const resources = [
    {
      category: 'Beginner Resources',
      icon: '🌱',
      items: [
        { title: 'Introduction to Programming', type: 'PDF Guide', link: '#' },
        { title: 'Python Basics Tutorial', type: 'Video Series', link: '#' },
        { title: 'First Steps in Web Development', type: 'Interactive Course', link: '#' },
        { title: 'Coding Fundamentals Workbook', type: 'PDF', link: '#' }
      ]
    },
    {
      category: 'Intermediate Resources',
      icon: '📈',
      items: [
        { title: 'Data Structures & Algorithms', type: 'Study Guide', link: '#' },
        { title: 'Building Web Applications', type: 'Project Tutorial', link: '#' },
        { title: 'Database Design Essentials', type: 'Video Course', link: '#' },
        { title: 'Git & GitHub Mastery', type: 'Interactive Tutorial', link: '#' }
      ]
    },
    {
      category: 'Advanced Resources',
      icon: '🚀',
      items: [
        { title: 'System Design Principles', type: 'Documentation', link: '#' },
        { title: 'Advanced React Patterns', type: 'Code Examples', link: '#' },
        { title: 'Machine Learning Basics', type: 'Course', link: '#' },
        { title: 'Software Architecture Guide', type: 'PDF', link: '#' }
      ]
    },
    {
      category: 'Career Resources',
      icon: '💼',
      items: [
        { title: 'Tech Resume Template', type: 'Download', link: '#' },
        { title: 'Interview Preparation Guide', type: 'PDF', link: '#' },
        { title: 'Salary Negotiation Tips', type: 'Article', link: '#' },
        { title: 'Building Your Portfolio', type: 'Guide', link: '#' }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', description: 'Popular code editor', icon: '💻', link: 'https://code.visualstudio.com' },
    { name: 'GitHub', description: 'Version control & collaboration', icon: '🐙', link: 'https://github.com' },
    { name: 'CodePen', description: 'Online code playground', icon: '✏️', link: 'https://codepen.io' },
    { name: 'Stack Overflow', description: 'Q&A community', icon: '📚', link: 'https://stackoverflow.com' },
    { name: 'Repl.it', description: 'Browser-based IDE', icon: '🔧', link: 'https://replit.com' },
    { name: 'MDN Web Docs', description: 'Web development docs', icon: '📖', link: 'https://developer.mozilla.org' }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Learning Resources</h1>
        <p>Free tutorials, guides, and tools to support your learning journey</p>
      </div>

      <section className="section">
        <h2 className="section-title">Documentation & Guides</h2>
        <p className="section-subtitle">
          Access our comprehensive curriculum guide and learning materials
        </p>

        <div className="docs-container">
          <iframe
            src={GOOGLE_DOC_EMBED_URL}
            className="docs-embed"
            title="CS for Each Resources"
          />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">Learning Materials by Level</h2>
        
        {resources.map((resource, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '2.5rem' }}>{resource.icon}</span>
              <h3 style={{ 
                fontSize: '2rem', 
                color: 'var(--dark-blue)',
                margin: 0
              }}>
                {resource.category}
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {resource.items.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  style={{
                    background: 'var(--white)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'inherit',
                    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <h4 style={{ 
                    color: 'var(--dark-blue)', 
                    marginBottom: '0.5rem',
                    fontSize: '1.2rem'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--primary-blue)', 
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    {item.type}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Recommended Tools</h2>
        <p className="section-subtitle">
          Essential tools and platforms every developer should know
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--white)',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {tool.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                color: 'var(--dark-blue)',
                marginBottom: '0.5rem'
              }}>
                {tool.name}
              </h3>
              <p style={{ color: 'var(--medium-gray)' }}>
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-blue)', textAlign: 'center' }}>
        <h2 className="section-title">Practice Platforms</h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: 'var(--medium-gray)', 
          marginBottom: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          Sharpen your skills with these coding challenge platforms
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {[
            { name: 'LeetCode', desc: 'Interview prep' },
            { name: 'HackerRank', desc: 'Coding challenges' },
            { name: 'CodeWars', desc: 'Code katas' },
            { name: 'Exercism', desc: 'Mentored learning' },
            { name: 'Project Euler', desc: 'Math problems' },
            { name: 'Coderbyte', desc: 'Interview practice' }
          ].map((platform, index) => (
            <div key={index} style={{
              background: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)'
            }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                {platform.name}
              </h4>
              <p style={{ color: 'var(--medium-gray)', fontSize: '0.9rem' }}>
                {platform.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Need More Help?</h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--medium-gray)', 
          marginBottom: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          Can't find what you're looking for? Our team is here to help you find the 
          right resources for your learning goals.
        </p>
        <a href="/contact" className="btn-primary">Contact Us</a>
      </section>
    </div>
  );
};

export default ResourcesPage;