import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    // Here you would integrate with your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Have questions or want to get involved? We'd love to hear from you!
      </p>

      <div className="contact-form">
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

      <div style={{ 
        marginTop: '3rem', 
        textAlign: 'center',
        maxWidth: '600px',
        margin: '3rem auto 0'
      }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--dark-blue)' }}>Other Ways to Connect</h3>
        <p style={{ color: 'var(--medium-gray)', marginBottom: '1.5rem' }}>
          Email: contact@csforeach.org<br />
          Phone: (555) 123-4567<br />
          Address: 123 Education Lane, Tech City, TC 12345
        </p>
      </div>
    </section>
  );
};

export default Contact;