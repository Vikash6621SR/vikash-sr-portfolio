import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Section Header */}
        <div className="section-heading education-heading">
          <span className="section-label">
            <GraduationCap size={15} />
            EDUCATION
          </span>

          <h2>
            Learning that built
            <span> my foundation.</span>
          </h2>

          <p>
            A strong academic foundation in computer science, combined with
            practical development experience and continuous learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-card">
          <div className="education-card-left">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <div className="education-year">
              2023
              <span>—</span>
              2026
            </div>
          </div>

          <div className="education-content">
            <div className="education-top">
              <div>
                <span className="education-level">UNDERGRADUATE DEGREE</span>

                <h3>B.Sc. Computer Science</h3>

                <p className="education-institute">
                  Kongunadu Arts and Science College
                </p>
              </div>

              <div className="education-status">
                <span className="status-dot"></span>
                Completed
              </div>
            </div>

            <div className="education-details">
              <div className="education-detail">
                <CalendarDays size={17} />
                <span>2023 – 2026</span>
              </div>

              <div className="education-detail">
                <MapPin size={17} />
                <span>Coimbatore, Tamil Nadu</span>
              </div>

              <div className="education-detail">
                <span className="cgpa-badge">7.0</span>
                <span>CGPA</span>
              </div>
            </div>

            <div className="education-description">
              <p>
                Completed a three-year undergraduate program focused on computer
                science fundamentals, programming, software development,
                databases, and modern technology concepts.
              </p>
            </div>

            <div className="education-footer">
              <span>B.Sc. Computer Science Graduate</span>

              <a href="#contact" className="education-link">
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
