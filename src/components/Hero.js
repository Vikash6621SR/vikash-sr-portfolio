import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* BACKGROUND DECORATION */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Open to Entry-Level Opportunities</span>
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-title">
            Vikash <span>SR</span>
          </h1>

          <h2 className="hero-role">
            Data Analyst <span>&</span> Full Stack Developer
          </h2>

          <p className="hero-description">
            Computer Science graduate and MCA student passionate about turning
            data into actionable insights and building practical web
            applications. I work with Python, SQL, MySQL, and Power BI for
            analytics, alongside Java, Spring Boot, React, and REST APIs for
            full stack development. I'm seeking an opportunity to apply my
            skills, solve real-world problems, and grow as a professional.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/VikashS.R_Resume.pdf"
              className="hero-secondary-btn"
              download="VikashS.R_Resume.pdf"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/vikash-sr-9a65a5280"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Vikash6621SR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a href="mailto:vikashsr412@gmail.com" aria-label="Email">
              <Mail size={19} />
            </a>

            <span className="social-line"></span>
            <span className="hero-social-text">Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="hero-visual">
          <div className="visual-ring visual-ring-one"></div>
          <div className="visual-ring visual-ring-two"></div>

          <div className="profile-card">
            <div className="profile-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="profile-placeholder">
              <div className="profile-image-wrapper">
                <img
                  src="/Vikashsr.png"
                  alt="Vikash SR"
                  className="profile-image"
                />
              </div>

              <div className="profile-code">
                <span>&lt;analyst_developer</span>
                <span className="code-green">{' name="Vikash"'}</span>
                <span>{" />"}</span>
              </div>
            </div>

            <div className="profile-card-bottom">
              <div>
                <strong>2026</strong>
                <span>B.Sc Graduate</span>
              </div>

              <div>
                <strong>MCA</strong>
                <span>In Progress</span>
              </div>
            </div>
          </div>

          {/* DATA ANALYTICS */}
          <div className="floating-card floating-card-one">
            <div className="floating-icon">SQL</div>
            <div>
              <strong>Data Analytics</strong>
              <span>Python · Power BI</span>
            </div>
          </div>

          {/* FULL STACK DEVELOPMENT */}
          <div className="floating-card floating-card-two">
            <div className="floating-icon ai-icon">{"</>"}</div>
            <div>
              <strong>Full Stack</strong>
              <span>Java · React</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;
