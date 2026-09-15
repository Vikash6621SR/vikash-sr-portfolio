import { ArrowUpRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="section-heading">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building with curiosity,
            <span> growing with purpose.</span>
          </h2>

          <p>
            A Computer Science graduate passionate about technology,
            problem-solving and building useful digital experiences.
          </p>
        </div>

        {/* =================================
            MAIN ABOUT CONTENT
        ================================= */}

        <div className="about-grid">
          {/* LEFT SIDE */}
          <div className="about-main-card">
            <div className="about-card-number">01</div>

            <div className="about-card-icon">
              <Code2 size={22} />
            </div>

            <h3>
              A developer who enjoys
              <span> building things.</span>
            </h3>

            <p>
              I'm a recent Computer Science graduate with hands-on exposure to
              full stack development, machine learning, ethical hacking and
              responsive web design.
            </p>

            <p>
              My development experience includes working with Java, Spring Boot,
              React, JavaScript, Python, MySQL and REST APIs. I enjoy learning
              new technologies and turning ideas into practical applications.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-side">
            {/* Card 1 */}
            <div className="about-small-card">
              <div className="small-card-icon">
                <Rocket size={20} />
              </div>

              <div>
                <h4>Always Learning</h4>

                <p>
                  Continuously exploring new technologies, development practices
                  and AI.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="about-small-card">
              <div className="small-card-icon">
                <Lightbulb size={20} />
              </div>

              <div>
                <h4>Problem Solving</h4>

                <p>
                  Enjoy breaking down problems and creating practical solutions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="about-small-card">
              <div className="small-card-icon">
                <Users size={20} />
              </div>

              <div>
                <h4>Team & Leadership</h4>

                <p>
                  Strong communication, teamwork, leadership and disciplined
                  work ethic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            QUICK FACTS
        ================================= */}

        <div className="about-facts">
          <div className="fact-item">
            <strong>2026</strong>

            <span>B.Sc Graduate</span>
          </div>

          <div className="fact-item">
            <strong>Full Stack</strong>

            <span>Development</span>
          </div>

          <div className="fact-item">
            <strong>AI / ML</strong>

            <span>Technical Interest</span>
          </div>

          <div className="fact-item">
            <strong>NCC 'C'</strong>

            <span>Grade B</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
