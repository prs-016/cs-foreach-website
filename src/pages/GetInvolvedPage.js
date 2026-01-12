import React, { useState, useEffect } from 'react';
import { initScrollReveal } from '../utils/animations';

const GetInvolvedPage = () => {
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

  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section scroll-reveal" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 className="hero-title">
          GET INVOLVED
        </h1>
        <p className="hero-description">
          Join us in making computer science education accessible to all students
        </p>
      </section>

      {/* How Can I Get Involved Section */}
      <section className="section scroll-reveal">
        <h2 className="section-title">
          HOW CAN I GET INVOLVED?
        </h2>
        <div className="get-involved-grid">
          {/* For UCSD Students */}
          <div className="involved-card scroll-reveal">
            <img 
              src="https://via.placeholder.com/360x440/E8F4FD/4A90E2?text=UCSD+Students"
              alt="For UCSD Students"
              className="involved-image"
            />
            <h3 className="involved-title">
              FOR UCSD STUDENTS
            </h3>
            <p className="involved-description">
              If you are a current UCSD student and you'd like to be involved, join our Discord for the most updated information! We also hold general body meetings (GBMs) every quarter where you can learn about what we're currently doing!
            </p>
            <a 
              href="https://discord.gg/zQRdJJxh2m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              JOIN OUR DISCORD
            </a>
          </div>

          {/* For Educators */}
          <div className="involved-card scroll-reveal">
            <img 
              src="https://via.placeholder.com/360x440/E8F4FD/4A90E2?text=Educators"
              alt="For Educators"
              className="involved-image"
            />
            <h3 className="involved-title">
              FOR EDUCATORS
            </h3>
            <p className="involved-description">
              If you are an educator and you'd like to be involved with our organization, email us at{' '}
              <a href="mailto:csforeach@ucsd.edu" style={{ color: 'var(--primary-blue)' }}>
                csforeach@ucsd.edu
              </a>
              {' '}or fill out our contact form and we will follow up with you!
            </p>
            <a 
              href="https://tinyurl.com/3hjmjyhc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CONTACT FORM
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions or want to get involved? Send us a message and we'll get back to you soon!
        </p>

        <div className="two-column-grid">
          <div className="scroll-reveal">
            <h3 style={{ fontSize: '1.8rem', color: 'var(--dark-blue)', marginBottom: '1.5rem' }}>
              Contact Information
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div className="contact-info-box">
                <span style={{ fontSize: '2rem' }}>📧</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Email
                  </h4>
                  <a href="mailto:csforeach@ucsd.edu" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                    csforeach@ucsd.edu
                  </a>
                </div>
              </div>

              <div className="contact-info-box">
                <span style={{ fontSize: '2rem' }}>📱</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Discord
                  </h4>
                  <a href="https://discord.gg/zQRdJJxh2m" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                    Join our Discord server
                  </a>
                </div>
              </div>

              <div className="contact-info-box">
                <span style={{ fontSize: '2rem' }}>📍</span>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', marginBottom: '0.25rem' }}>
                    Location
                  </h4>
                  <p style={{ color: 'var(--medium-gray)', margin: 0 }}>
                    UC San Diego<br />
                    La Jolla, CA 92093
                  </p>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-blue)', marginBottom: '1rem', marginTop: '2rem' }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {[
                { img: 'https://via.placeholder.com/64x64/1DA1F2/FFFFFF?text=TW', name: 'Twitter', link: 'https://twitter.com' },
                { img: 'https://via.placeholder.com/64x64/E1306C/FFFFFF?text=IG', name: 'Instagram', link: 'https://www.instagram.com/csforeach/' },
                { img: 'https://via.placeholder.com/64x64/0077B5/FFFFFF?text=IN', name: 'LinkedIn', link: 'https://www.linkedin.com/company/csforeach/' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-hover"
                  title={social.name}
                >
                  <img src={social.img} alt={social.name} className="social-icon-img" />
                </a>
              ))}
            </div>
          </div>

          <div className="scroll-reveal">
            <h3 style={{ fontSize: '1.8rem', color: 'var(--dark-blue)', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h3>

            <div className="contact-form-box">
              {submitted ? (
                <div className="form-success">
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
                      className="form-select"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="student">Joining as a Student</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="mentor">Becoming a Mentor</option>
                      <option value="partner">School Partnership</option>
                      <option value="sponsor">Sponsorship</option>
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
                      className="form-input"
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
                      className="form-input"
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
                      className="form-input"
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
                      className="form-textarea"
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

      {/* FAQ Section */}
      <section className="section scroll-reveal">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          {[
            {
              q: 'What age groups do you serve?',
              a: 'We primarily work with K-12 students in the San Diego area, with a focus on traditionally underserved communities.'
            },
            {
              q: 'Do I need prior coding experience?',
              a: 'No! We have programs for complete beginners as well as more advanced students. We\'ll help you find the right starting point.'
            },
            {
              q: 'How do I sign up for a program?',
              a: 'Fill out the contact form above or email us directly at csforeach@ucsd.edu with your interest!'
            },
            {
              q: 'Can my school partner with CS foreach?',
              a: 'Absolutely! We love working with schools. Contact us to discuss how we can support your CS education goals.'
            }
          ].map((faq, index) => (
            <div key={index} className="faq-item scroll-reveal">
              <h3 className="faq-question">
                {faq.q}
              </h3>
              <p className="faq-answer">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;