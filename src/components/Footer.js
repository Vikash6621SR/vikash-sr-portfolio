import { ArrowUp, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-box">V</span>
              <span>Vikash SR</span>
            </a>

            <p>
              Computer Science graduate and Full Stack Developer building
              practical, modern digital experiences.
            </p>

            <div className="footer-location">
              <MapPin size={14} />
              Coimbatore, Tamil Nadu, India
            </div>
          </div>

          <div className="footer-links-column">
            <span>EXPLORE</span>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-links-column">
            <span>MORE</span>

            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
            <a href="/Vikash_SRResume.pdf" download>
              Resume
            </a>
          </div>

          <div className="footer-connect">
            <span>CONNECT</span>

            <a href="mailto:vikashsr412@gmail.com">
              <Mail size={15} />
              vikashsr412@gmail.com
            </a>

            <div className="footer-socials">
              <a
                href="https://linkedin.com/in/vikash-sr-9a65a5280"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Vikash SR. All rights reserved.</p>

          <p className="footer-built">
            Designed & built with <span>React</span>
          </p>

          <a href="#home" className="back-to-top" aria-label="Back to top">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
