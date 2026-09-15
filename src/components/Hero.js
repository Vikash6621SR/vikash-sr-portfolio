import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* =================================
          BACKGROUND DECORATION
      ================================== */}

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-grid"></div>

      {/* =================================
          MAIN HERO CONTAINER
      ================================== */}

      <div className="hero-container">
        {/* =================================
            LEFT CONTENT
        ================================== */}

        <div className="hero-content">
          {/* Availability Status */}
          <div className="hero-status">
            <span className="status-dot"></span>

            <span>Open to opportunities</span>
          </div>

          {/* Introduction */}
          <p className="hero-intro">Hello, I'm</p>

          {/* Name */}
          <h1 className="hero-title">
            Vikash <span>SR</span>
          </h1>

          {/* Professional Title */}
          <h2 className="hero-role">Computer Science Graduate</h2>

          {/* Professional Description */}
          <p className="hero-description">
            A versatile Computer Science graduate with hands-on experience in
            full stack development, machine learning, ethical hacking, and
            e-commerce. Currently working as a Full Stack Developer Intern,
            building modern web applications using Java and Spring Boot.
          </p>

          {/* =================================
              ACTION BUTTONS
          ================================== */}

          <div className="hero-actions">
            {/* View Projects */}
            <a href="#projects" className="hero-primary-btn">
              View My Work
              <ArrowRight size={18} />
            </a>

            {/* Download Resume */}
            <a
              href="/Vikash_SRResume.pdf"
              className="hero-secondary-btn"
              download
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          {/* =================================
              SOCIAL LINKS
          ================================== */}

          <div className="hero-socials">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vikash-sr-9a65a5280"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Vikash6621SR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* Email */}
            <a href="mailto:vikashsr412@gmail.com" aria-label="Email">
              <Mail size={19} />
            </a>

            {/* Divider */}
            <span className="social-line"></span>

            {/* Location */}
            <span className="hero-social-text">Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        {/* =================================
            RIGHT SIDE VISUAL
        ================================== */}

        <div className="hero-visual">
          {/* Decorative Rings */}
          <div className="visual-ring visual-ring-one"></div>

          <div className="visual-ring visual-ring-two"></div>

          {/* =================================
              PROFILE CARD
          ================================== */}

          <div className="profile-card">
            {/* Card Header */}
            <div className="profile-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* =================================
                PROFILE IMAGE AREA
            ================================== */}

            <div className="profile-placeholder">
              {/* Profile Photo */}
              <div className="profile-image-wrapper">
                <img
                  src="/Vikashsr.png"
                  alt="Vikash SR"
                  className="profile-image"
                />
              </div>

              {/* Developer Code */}
              <div className="profile-code">
                <span>&lt;developer</span>

                <span className="code-green">{' name="Vikash"'}</span>

                <span>{" />"}</span>
              </div>
            </div>

            {/* =================================
                PROFILE CARD FOOTER
            ================================== */}

            <div className="profile-card-bottom">
              <div>
                <strong>2026</strong>

                <span>Graduate</span>
              </div>

              <div>
                <strong>5+</strong>

                <span>Certifications</span>
              </div>
            </div>
          </div>

          {/* =================================
              FLOATING CARD - FULL STACK
          ================================== */}

          <div className="floating-card floating-card-one">
            <div className="floating-icon">{"</>"}</div>

            <div>
              <strong>Full Stack</strong>

              <span>Developer Intern</span>
            </div>
          </div>

          {/* =================================
              FLOATING CARD - COMPUTER SCIENCE
          ================================== */}

          <div className="floating-card floating-card-two">
            <div className="floating-icon ai-icon">AI</div>

            <div>
              <strong>Computer Science</strong>

              <span>Graduate</span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          SCROLL INDICATOR
      ================================== */}

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>

        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;
