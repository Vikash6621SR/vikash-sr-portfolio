import {
  Briefcase,
  CalendarDays,
  MapPin,
  Code2,
} from "lucide-react";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* SECTION HEADER */}
        <div className="section-heading experience-heading">
          <span className="section-label">EXPERIENCE</span>

          <h2>
            Practical experience,
            <span> continuous growth.</span>
          </h2>

          <p>
            Professional software development experience and entrepreneurial
            work that have strengthened my technical, analytical, and
            problem-solving skills.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience-timeline">
          {/* EXPERIENCE 01 */}
          <article className="experience-item">
            <div className="timeline-column">
              <div className="timeline-dot">
                <Briefcase size={17} />
              </div>

              <div className="timeline-line"></div>
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <span className="experience-number">01</span>

                  <h3>Full Stack Developer Intern</h3>

                  <h4>Izeon Innovative Pvt Ltd</h4>
                </div>

                <span className="experience-current">Completed</span>
              </div>

              <div className="experience-meta">
                <span>
                  <CalendarDays size={14} />
                  March 2026 – August 2026
                </span>

                <span>
                  <MapPin size={14} />
                  Chennai, India
                </span>
              </div>

              <div className="experience-description">
                <p>
                  Developed and maintained web applications using Java and
                  Spring Boot, building REST APIs for server-side business logic
                  and communication between frontend and backend services.
                </p>

                <p>
                  Designed responsive interfaces using React.js, JavaScript,
                  HTML5, CSS3, and Bootstrap to support desktop and mobile
                  screens.
                </p>

                <p>
                  Integrated MySQL databases for CRUD operations, tested API
                  endpoints using Postman, and managed source code with Git
                  throughout the internship.
                </p>
              </div>

              <div className="experience-technologies">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST APIs</span>
                <span>React.js</span>
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>Postman</span>
                <span>Git</span>
              </div>
            </div>
          </article>
        </div>

        {/* EXPERIENCE FOOTER */}
        <div className="experience-note">
          <div className="experience-note-icon">
            <Code2 size={18} />
          </div>

          <div>
            <strong>Building skills through practical work</strong>

            <p>
              My professional development experience and project work have
              helped me strengthen my programming, database, API development,
              and problem-solving skills. I am now looking for an entry-level
              Data Analyst or Full Stack Developer opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
