import React from 'react';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
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
      year: '2022',
      image: 'https://via.placeholder.com/279x184/FF6B35/FFFFFF?text=TritonHacks+2022',
      impactReport: 'https://github.com/tritonhacks/GitHub-Grant/blob/main/Tritonhacks-2022.md',
      projectGallery: 'https://tritonhacks22.devpost.com/project-gallery'
    },
    {
      year: '2021',
      image: 'https://via.placeholder.com/279x184/FF6B35/FFFFFF?text=TritonHacks+2021',
      impactReport: 'https://drive.google.com/file/d/1b2xqs0BwfMJdjbE3keA1vMEaJzY51K5F/view',
      projectGallery: 'https://tritonhacks-2021.devpost.com/project-gallery'
    }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section style={{
        marginTop: '80px',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, var(--light-blue) 0%, var(--white) 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="https://via.placeholder.com/547x546/4A90E2/FFFFFF?text=CS+foreach"
              alt="CS foreach illustration"
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </div>
          <div>
            <img 
              src="https://via.placeholder.com/784x716/E8F4FD/4A90E2?text=Students+Learning"
              alt="Students learning"
              style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
            />
          </div>
        </div>
      </section>

      {/* Our Programs Intro */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          color: 'var(--dark-blue)',
          marginBottom: '1.5rem'
        }}>
          OUR PROGRAMS
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'var(--medium-gray)',
          maxWidth: '900px',
          margin: '0 auto 4rem',
          lineHeight: '1.8'
        }}>
          Our organization runs 3 different programs to teach and mentor students: Curriculum, TritonHacks, and Early Start. Learn more about each program below!
        </p>

        {/* Three Program Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* TritonHacks Card */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <img 
              src="https://via.placeholder.com/63x71/FF6B35/FFFFFF?text=TH"
              alt="TritonHacks Logo"
              style={{ marginBottom: '1rem' }}
            />
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--dark-blue)',
              marginBottom: '1rem'
            }}>
              TritonHacks
            </h3>
            <p style={{ 
              color: 'var(--medium-gray)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              A beginner-friendly high school hackathon that includes project kits, workshops, and mentors.
            </p>
            <a href="#tritonhacks" style={{
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              LEARN MORE
            </a>
          </div>

          {/* Curriculum Card */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <img 
              src="https://via.placeholder.com/103x81/4A90E2/FFFFFF?text=C"
              alt="Curriculum Logo"
              style={{ marginBottom: '1rem' }}
            />
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--dark-blue)',
              marginBottom: '1rem'
            }}>
              Curriculum
            </h3>
            <p style={{ 
              color: 'var(--medium-gray)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Runs CS workshops year-round to provide supplementary material to school curriculum.
            </p>
            <a href="#curriculum" style={{
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              LEARN MORE
            </a>
          </div>

          {/* Early Start Card */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <img 
              src="https://via.placeholder.com/87x73/2E5C8A/FFFFFF?text=ES"
              alt="Early Start Logo"
              style={{ marginBottom: '1rem' }}
            />
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--dark-blue)',
              marginBottom: '1rem'
            }}>
              Early Start
            </h3>
            <p style={{ 
              color: 'var(--medium-gray)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              15-week program that matches high schoolers with UCSD students to work on a CS project.
            </p>
            <a href="#earlystart" style={{
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section" style={{ 
        background: 'var(--light-gray)',
        padding: '5rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--dark-blue)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            CURRICULUM
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: 'var(--medium-gray)'
              }}>
                Our Curriculum committee runs the workshops and mentorship program year-round providing supplementary material to school curriculum. That means we can work in tangent with the material relevant to classes to help shake things up and bring a different perspective to the subject for any grade level.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
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
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'var(--dark-blue)',
              marginBottom: '1rem'
            }}>
              PAST WORKSHOPS
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--medium-gray)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Preview some of our past workshops here! We have taught classes on topics such as AP Computer Science review, introductory Python and Java, and college preparation. If you are interested in scheduling a workshop with us or developing a new workshop, feel free to contact us!
            </p>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              CONTACT US
            </Link>
          </div>

          {/* Workshop Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {pastWorkshops.map((workshop, index) => (
              <div key={index} style={{
                background: 'var(--white)',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease'
              }}>
                <img 
                  src={workshop.image}
                  alt={workshop.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{
                    color: 'var(--dark-blue)',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                  }}>
                    {workshop.title}
                  </h4>
                  <p style={{
                    color: 'var(--primary-blue)',
                    fontWeight: 600,
                    fontSize: '0.95rem'
                  }}>
                    {workshop.subject}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TritonHacks Section */}
      <section id="tritonhacks" className="section" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--dark-blue)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            TRITONHACKS
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--medium-gray)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 4rem'
          }}>
            Starting in 2020, every Spring we put on a beginner-friendly high school hackathon, TritonHacks, at the UCSD campus to provide a friendly competition space for students to push the limits of what they're capable of!
          </p>

          {/* TritonHacks Event Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {tritonhacksEvents.map((event, index) => (
              <div key={index} style={{
                background: 'var(--white)',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src={event.image}
                  alt={`TritonHacks ${event.year}`}
                  style={{ width: '100%', height: '184px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    color: 'var(--dark-blue)',
                    fontSize: '1.4rem',
                    marginBottom: '1rem'
                  }}>
                    {event.website ? (
                      <a href={event.website} target="_blank" rel="noopener noreferrer" style={{
                        color: 'var(--dark-blue)',
                        textDecoration: 'none'
                      }}>
                        TRITONHACKS {event.year}
                      </a>
                    ) : (
                      `TRITONHACKS ${event.year}`
                    )}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.8rem' 
                  }}>
                    <a 
                      href={event.impactReport}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--primary-blue)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem'
                      }}
                    >
                      IMPACT REPORT
                    </a>
                    <a 
                      href={event.projectGallery}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--primary-blue)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem'
                      }}
                    >
                      PROJECT GALLERY
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Start Fellowship Section */}
      <section id="earlystart" className="section" style={{ 
        background: 'var(--light-gray)',
        padding: '5rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--dark-blue)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            EARLY START FELLOWSHIP
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--medium-gray)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            For longer-term projects, we offer a unique, 15 week opportunity for high school students to join a team of college students in an <a href="https://www.agilealliance.org/agile101/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)' }}>AGILE environment</a>, working on a project of their choosing.
          </p>

          {/* Interest Form Section */}
          <div style={{
            background: 'var(--white)',
            padding: '3rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'var(--dark-blue)',
              marginBottom: '1.5rem'
            }}>
              INTEREST FORM FOR SPRING 2023
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--medium-gray)',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Our 2023 Fall Cohort has just launched but we're prepping for our next cohort in Spring 2023! Just fill out the contact form and specify you're interested in Early Start and we'll get in touch.<br/>
              Priority will be given to students that have attended prior CS foreach events (Workshops and TritonHacks).
            </p>
            <a 
              href="https://forms.gle/2Exe9EXPCoBJq7oZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block' }}
            >
              INTEREST FORM
            </a>
          </div>

          {/* Cohort Projects */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'var(--dark-blue)',
              marginBottom: '2rem'
            }}>
              COHORT PROJECTS SPRING 2022
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '3rem'
          }}>
            <div style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center'
            }}>
              <img 
                src="https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Cohort+Project+1"
                alt="Cohort Project 1"
                style={{ 
                  width: '100%', 
                  maxWidth: '400px',
                  marginBottom: '1.5rem',
                  borderRadius: '10px'
                }}
              />
              <a 
                href="https://theodorealoucsd.github.io/Team-CSforeachers/Pages/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                COHORT PROJECT 1
              </a>
            </div>

            <div style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              textAlign: 'center'
            }}>
              <img 
                src="https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Cohort+Project+2"
                alt="Cohort Project 2"
                style={{ 
                  width: '100%', 
                  maxWidth: '400px',
                  marginBottom: '1.5rem',
                  borderRadius: '10px'
                }}
              />
              <a 
                href="https://mohaelder.github.io/Project-Inspo/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                COHORT PROJECT 2
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;