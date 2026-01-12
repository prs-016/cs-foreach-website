import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '',
        interest: 'general'
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>Have questions? Want to get involved? We'd love to hear from you!</p>
      </div>

      <section className="section">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
          gap: '4rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              color: 'var(--dark-blue)', 
              marginBottom: '1.5rem' 
            }}>
              Contact Information
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'var(--light-blue)',
                borderRadius: '10px'
              }}>
                <span style={{ fontSize: '2rem' }}>📧</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Email
                  </h4>
                  <a href="mailto:contact@csforeach.org" style={{ 
                    color: 'var(--primary-blue)',
                    textDecoration: 'none'
                  }}>
                    contact@csforeach.org
                  </a>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'var(--light-blue)',
                borderRadius: '10px'
              }}>
                <span style={{ fontSize: '2rem' }}>📱</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Phone
                  </h4>
                  <a href="tel:+15551234567" style={{ 
                    color: 'var(--primary-blue)',
                    textDecoration: 'none'
                  }}>
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'var(--light-blue)',
                borderRadius: '10px'
              }}>
                <span style={{ fontSize: '2rem' }}>📍</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Address
                  </h4>
                  <p style={{ color: 'var(--medium-gray)', margin: 0 }}>
                    123 Education Lane<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--dark-blue)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              Office Hours
            </h3>
            <div style={{ 
              background: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)'
            }}>
              <p style={{ color: 'var(--medium-gray)', marginBottom: '0.5rem' }}>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p style={{ color: 'var(--medium-gray)', marginBottom: '0.5rem' }}>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p style={{ color: 'var(--medium-gray)' }}>
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--dark-blue)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: '🐦', name: 'Twitter', link: 'https://twitter.com' },
                { icon: '📘', name: 'Facebook', link: 'https://facebook.com' },
                { icon: '📷', name: 'Instagram', link: 'https://instagram.com' },
                { icon: '💼', name: 'LinkedIn', link: 'https://linkedin.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '2rem',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              color: 'var(--dark-blue)', 
              marginBottom: '1.5rem' 
            }}>
              Send Us a Message
            </h2>

            <div style={{
              background: 'var(--white)',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
            }}>
              {submitted ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '3rem',
                  color: 'var(--primary-blue)',
                  fontSize: '1.2rem'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <p>Thank you for reaching out! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="interest">I'm interested in: *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '2px solid #E0E0E0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="student">Enrolling as a Student</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="mentor">Becoming a Mentor</option>
                      <option value="partner">School Partnership</option>
                      <option value="donate">Donations & Sponsorship</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'grid',
          gap: '1.5rem'
        }}>
          {[
            {
              q: 'Are your programs really free?',
              a: 'Yes! All our programs are 100% free for students. We\'re funded through grants and donations to ensure cost is never a barrier to learning.'
            },
            {
              q: 'What age groups do you serve?',
              a: 'We primarily serve middle and high school students (ages 11-18), but some programs are open to college students and adult learners.'
            },
            {
              q: 'Do I need prior coding experience?',
              a: 'No! We have programs for complete beginners as well as more advanced students. We\'ll help you find the right starting point.'
            },
            {
              q: 'How do I sign up for a program?',
              a: 'Fill out the contact form above selecting your area of interest, or email us directly at contact@csforeach.org.'
            },
            {
              q: 'Can my school partner with CS for Each?',
              a: 'Absolutely! We love working with schools. Contact us to discuss how we can support your CS education goals.'
            }
          ].map((faq, index) => (
            <div key={index} style={{
              background: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)'
            }}>
              <h3 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '0.8rem',
                fontSize: '1.2rem'
              }}>
                {faq.q}
              </h3>
              <p style={{ color: 'var(--medium-gray)', lineHeight: '1.7' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;