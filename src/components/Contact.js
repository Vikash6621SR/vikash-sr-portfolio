import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:vikashsr412@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section Header */}
        <div className="section-heading contact-heading">
          <span className="section-label">
            <Mail size={15} />
            CONTACT
          </span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I'm open to opportunities where I can learn, contribute,
            and grow. If you have a project, role, or idea you'd like
            to discuss, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-info-header">
              <span>GET IN TOUCH</span>
              <h3>Have an opportunity?</h3>
              <p>
                I'm always interested in connecting with people,
                teams, and organizations working on interesting
                technology and business problems.
              </p>
            </div>

            <div className="contact-details">

              <a
                href="mailto:vikashsr412@gmail.com"
                className="contact-detail-card"
              >
                <div className="contact-detail-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>vikashsr412@gmail.com</strong>
                </div>

                <ArrowUpRight size={17} />
              </a>

              <a
                href="tel:+918778114749"
                className="contact-detail-card"
              >
                <div className="contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 8778114749</strong>
                </div>

                <ArrowUpRight size={17} />
              </a>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Coimbatore, Tamil Nadu, India</strong>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="contact-socials">

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

              <a
                href="mailto:vikashsr412@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

            </div>

            <a
              href="/Vikash_SRResume.pdf"
              className="contact-resume-btn"
              download
            >
              <Download size={17} />
              Download Resume
            </a>

          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <div className="contact-form-top">
              <span>START A CONVERSATION</span>
              <div className="contact-form-status">
                <span></span>
                Available
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your opportunity or idea..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="form-note">
                Clicking "Send Message" will open your default email
                application with the message prepared.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;