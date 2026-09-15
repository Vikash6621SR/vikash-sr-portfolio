import { Briefcase, CalendarDays, MapPin, Store } from "lucide-react";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="section-heading experience-heading">
          <span className="section-label">EXPERIENCE</span>

          <h2>
            Where I've been
            <span> building and learning.</span>
          </h2>

          <p>
            Practical experience gained through professional development work
            and building a real-world e-commerce venture.
          </p>
        </div>

        {/* =================================
            TIMELINE
        ================================= */}

        <div className="experience-timeline">
          {/* =================================
              EXPERIENCE 01
          ================================= */}

          <article className="experience-item">
            {/* Timeline */}
            <div className="timeline-column">
              <div className="timeline-dot">
                <Briefcase size={17} />
              </div>

              <div className="timeline-line"></div>
            </div>

            {/* Content */}
            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <span className="experience-number">01</span>

                  <h3>Full Stack Developer Intern</h3>

                  <h4>Izeon Innovation</h4>
                </div>

                <span className="experience-current">Present</span>
              </div>

              {/* Meta */}
              <div className="experience-meta">
                <span>
                  <CalendarDays size={14} />
                  May 2026 – Present
                </span>

                <span>
                  <MapPin size={14} />
                  Chennai
                </span>
              </div>

              {/* Description */}
              <div className="experience-description">
                <p>
                  Developing and maintaining web applications using Java and
                  Spring Boot as part of a professional development environment.
                </p>

                <p>
                  Designing responsive user interfaces using HTML, CSS,
                  Bootstrap, JavaScript and React.
                </p>
              </div>

              {/* Technologies */}
              <div className="experience-technologies">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
              </div>
            </div>
          </article>

          {/* =================================
              EXPERIENCE 02
          ================================= */}

          <article className="experience-item">
            {/* Timeline */}
            <div className="timeline-column">
              <div className="timeline-dot">
                <Store size={17} />
              </div>
            </div>

            {/* Content */}
            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <span className="experience-number">02</span>

                  <h3>Founder</h3>

                  <h4>Sivam Silks</h4>
                </div>

                <span className="experience-current founder-badge">
                  Ongoing
                </span>
              </div>

              {/* Meta */}
              <div className="experience-meta">
                <span>
                  <Store size={14} />
                  Handloom Fabric E-commerce
                </span>
              </div>

              {/* Description */}
              <div className="experience-description">
                <p>
                  Founded and built a handloom fabric e-commerce venture serving
                  men and women, managing the business from product sourcing
                  through online sales.
                </p>

                <p>
                  Developed the e-commerce website from scratch using HTML, CSS
                  and JavaScript, including Razorpay payment integration.
                </p>

                <p>
                  Implemented separate admin and customer login systems, product
                  management, cart and wishlist functionality, and local data
                  persistence.
                </p>
              </div>

              {/* Business Skills */}
              <div className="experience-technologies">
                <span>E-commerce</span>
                <span>JavaScript</span>
                <span>Razorpay</span>
                <span>Product Management</span>
                <span>Customer Handling</span>
              </div>
            </div>
          </article>
        </div>

        {/* =================================
            EXPERIENCE FOOTER
        ================================= */}

        <div className="experience-note">
          <div className="experience-note-icon">
            <Briefcase size={18} />
          </div>

          <div>
            <strong>Learning through real-world experience</strong>

            <p>
              From professional software development to entrepreneurship, each
              experience has helped me strengthen both my technical and
              practical skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
