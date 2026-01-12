import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initScrollReveal } from '../utils/animations';

const ProgramsPage = () => {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  const pastWorkshops = [
    {
      image: 'https://via.placeholder.com/400x265/4A90E2/FFFFFF?text=Turtlin+Workshop',
      title: "Turtlin': Implementing Lindenmayer Systems with Clean Code",
      subject: 'Python'
    },
    {
      image: 'https://via.placeholder.com/400x265/4A90E2/FFFFFF?text=Inheritance+Workshop',
      title: 'Inheritance & Recursion',
      subject: 'AP CS, Java'
    },
    {
      image: 'https://via.placeholder.com/400x265/4A90E2/FFFFFF?text=3D+Printing',
      title: 'CS foreach x IEEE: 3D Printing',
      subject: 'Industry Skills'
    }
  ];

  const tritonhacksEvents = [
    {
      year: '2023',
      image: 'https://via.placeholder.com/279x184/FF6B35/FFFFFF?text=TritonHacks+2023',
      website: 'https://www.tritonhacks.org/',
      impactReport: 'https://github.com/tritonhacks/TH23-Impact-Report/blob/main/Tritonhacks-2023.md',
      projectGallery: 'https://tritonhacks23.devpost.com/project-gallery'
    },
    {
      year: '2024',
      image: 'https://via.placeholder.com/279x184/FF6B35/FFFFFF?text=TritonHacks+2022',
      impactReport: 'https://github.com/tritonhacks/TH24-Impact-Report/blob/main/README.md',
      projectGallery: 'https://tritonhacks-2024.devpost.com/project-gallery?page=1'
    },
    {
      year: '2025',
      image: 'https://via.placeholder.com/279x184/FF6B35/FFFFFF?text=TritonHacks+2021',
      impactReport: 'https://github.com/tritonhacks/TH25-Impact-Report/blob/main/README.md',
      projectGallery: 'https://tritonhacks-2025.devpost.com/project-gallery'
    }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section scroll-reveal">
        <div className="two-column-grid">
          <div className="scroll-reveal">
            <img 
              src="https://via.placeholder.com/547x546/4A90E2/FFFFFF?text=CS+foreach"
              alt="CS foreach illustration"
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </div>
          <div className="scroll-reveal">
            <img 
              src="https://via.placeholder.com/784x716/E8F4FD/4A90E2?text=Students+Learning"
              alt="Students learning"
              style={{ width: '100%', borderRadius: '15px' }}
            />
          </div>
        </div>
      </section>

      {/* Our Programs Intro */}
      <section className="section scroll-reveal" style={{ textAlign: 'center' }}>
        <h1 className="hero-title">
          OUR PROGRAMS
        </h1>
        <p className="hero-description">
          Our organization runs 3 different programs to teach and mentor students: Curriculum, TritonHacks, and Early Start. Learn more about each program below!
        </p>

        {/* Three Program Cards */}
        <div className="three-column-grid">
          {/* TritonHacks Card */}
          <div className="card scroll-reveal">
            <img 
              src="https://via.placeholder.com/63x71/FF6B35/FFFFFF?text=TH"
              alt="TritonHacks Logo"
              className="card-icon"
            />
            <h3 className="card-title">
              TritonHacks
            </h3>
            <p className="card-description">
              A beginner-friendly high school hackathon that includes project kits, workshops, and mentors.
            </p>
            <a href="#tritonhacks" className="card-link">
              LEARN MORE
            </a>
          </div>

          {/* Curriculum Card */}
          <div className="card scroll-reveal">
            <img 
              src="https://via.placeholder.com/103x81/4A90E2/FFFFFF?text=C"
              alt="Curriculum Logo"
              className="card-icon"
            />
            <h3 className="card-title">
              Curriculum
            </h3>
            <p className="card-description">
              Runs CS workshops year-round to provide supplementary material to school curriculum.
            </p>
            <a href="#curriculum" className="card-link">
              LEARN MORE
            </a>
          </div>

          {/* Early Start Card */}
          <div className="card scroll-reveal">
            <img 
              src="https://via.placeholder.com/87x73/2E5C8A/FFFFFF?text=ES"
              alt="Early Start Logo"
              className="card-icon"
            />
            <h3 className="card-title">
              Early Start
            </h3>
            <p className="card-description">
              15-week program that matches high schoolers with UCSD students to work on a CS project.
            </p>
            <a href="#earlystart" className="card-link">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">
          CURRICULUM
        </h2>
        
        <div className="two-column-grid">
          <div className="scroll-reveal">
            <p className="hero-description" style={{ marginBottom: 0 }}>
              Our Curriculum committee runs the workshops and mentorship program year-round providing supplementary material to school curriculum. That means we can work in tangent with the material relevant to classes to help shake things up and bring a different perspective to the subject for any grade level.
            </p>
          </div>
          <div className="scroll-reveal" style={{ textAlign: 'center' }}>
            <img 
              src="https://via.placeholder.com/478x298/E8F4FD/4A90E2?text=Workshop+Image"
              alt="Workshop"
              style={{ 
                width: '100%', 
                maxWidth: '478px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>

        {/* Past Workshops */}
        {/* TODO: implement carousel here: link to react component we can just copy-https://levelup.gitconnected.com/implementing-an-infinite-autoplay-carousel-in-react-with-splide-cac6355ba435   go down to carousel games .jsx */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '3rem' }}>
          <h3 className="section-title" style={{ fontSize: '2rem' }}>
            PAST WORKSHOPS
          </h3>
          <p className="section-subtitle">
            Preview some of our past workshops here! We have taught classes on topics such as AP Computer Science review, introductory Python and Java, and college preparation. If you are interested in scheduling a workshop with us or developing a new workshop, feel free to contact us!
          </p>
          <Link to="/partners" className="btn-primary">
            CONTACT US
          </Link>
        </div>

        {/* Workshop Cards */}
        <div className="workshop-grid">
          {pastWorkshops.map((workshop, index) => (
            <div key={index} className="workshop-card scroll-reveal">
              <img 
                src={workshop.image}
                alt={workshop.title}
                className="workshop-image"
              />
              <div className="workshop-content">
                <h4 className="workshop-title">
                  {workshop.title}
                </h4>
                <p className="workshop-subject">
                  {workshop.subject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TritonHacks Section */}
      <section id="tritonhacks" className="section scroll-reveal">
        <h2 className="section-title">
          TRITONHACKS
        </h2>
        
        <p className="section-subtitle">
          Starting in 2020, every Spring we put on a beginner-friendly high school hackathon, TritonHacks, at the UCSD campus to provide a friendly competition space for students to push the limits of what they're capable of!
        </p>

        {/* TritonHacks Event Cards */}
        <div className="event-grid">
          {tritonhacksEvents.map((event, index) => (
            <div key={index} className="event-card scroll-reveal">
              <img 
                src={event.image}
                alt={`TritonHacks ${event.year}`}
                className="event-image"
              />
              <div className="event-content">
                <h3 className="event-title">
                  {event.website ? (
                    <a href={event.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark-blue)', textDecoration: 'none' }}>
                      TRITONHACKS {event.year}
                    </a>
                  ) : (
                    `TRITONHACKS ${event.year}`
                  )}
                </h3>
                <div className="event-links">
                  <a 
                    href={event.impactReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-link"
                  >
                    IMPACT REPORT
                  </a>
                  <a 
                    href={event.projectGallery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-link"
                  >
                    PROJECT GALLERY
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Early Start Fellowship Section */}
      <section id="earlystart" className="section scroll-reveal" style={{ background: 'var(--light-gray)' }}>
        <h2 className="section-title">
          EARLY START FELLOWSHIP
        </h2>
        
        <p className="section-subtitle">
          For longer-term projects, we offer a unique, 15 week opportunity for high school students to join a team of college students in an AGILE environment, working on a project of their choosing.
        </p>

        {/* Interest Form Section */}
        <div className="cta-box scroll-reveal" style={{ background: 'var(--white)' }}>
          <h3 className="cta-title" style={{ fontSize: '2rem' }}>
            INTEREST FORM FOR SPRING 2023
          </h3>
          <p className="cta-description">
            Our 2023 Fall Cohort has just launched but we're prepping for our next cohort in Spring 2023! Just fill out the contact form and specify you're interested in Early Start and we'll get in touch.<br/>
            Priority will be given to students that have attended prior CS foreach events (Workshops and TritonHacks).
          </p>
          <a 
            href="https://forms.gle/2Exe9EXPCoBJq7oZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            INTEREST FORM
          </a>
        </div>

        {/* Cohort Projects */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          <h3 className="section-title" style={{ fontSize: '2rem' }}>
            COHORT PROJECTS SPRING 2022
          </h3>
        </div>
        <div className="cohort-grid">
          <div className="cohort-card scroll-reveal">
            <img 
              src="https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Cohort+Project+1"
              alt="Cohort Project 1"
              className="cohort-image"
            />
            <a 
              href="https://theodorealoucsd.github.io/Team-CSforeachers/Pages/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              COHORT PROJECT 1
            </a>
          </div>

          <div className="cohort-card scroll-reveal">
            <img 
              src="https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Cohort+Project+2"
              alt="Cohort Project 2"
              className="cohort-image"
            />
            <a 
              href="https://mohaelder.github.io/Project-Inspo/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              COHORT PROJECT 2
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;