import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Rocket,
  Users,
  ChartNoAxesCombined,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* SECTION HEADER */}
        <div className="section-heading">
          <span className="section-label">ABOUT ME</span>

          <h2>
            Turning data into insights,
            <span> building with code.</span>
          </h2>

          <p>
            Computer Science graduate and aspiring Data Analyst & Full Stack
            Developer passionate about solving real-world problems through data
            and technology.
          </p>
        </div>

        {/* MAIN ABOUT CONTENT */}
        <div className="about-grid">
          {/* LEFT SIDE */}
          <div className="about-main-card">
            <div className="about-card-number">01</div>

            <div className="about-card-icon">
              <Code2 size={22} />
            </div>

            <h3>
              Analytical thinking meets
              <span> software development.</span>
            </h3>

            <p>
              I'm a B.Sc Computer Science graduate currently pursuing my MCA.
              I'm looking for an entry-level opportunity in Data Analytics or
              Full Stack Development where I can apply my skills and continue
              learning.
            </p>

            <p>
              In data analytics, I work with Python, Pandas, SQL, MySQL, and
              Power BI to clean datasets, analyze trends, track KPIs, and create
              meaningful visualizations. My Telco Customer Churn Analysis
              project demonstrates how I turn customer data into actionable
              insights.
            </p>

            <p>
              In development, I work with Java, Spring Boot, React, JavaScript,
              MySQL, and REST APIs to build responsive web applications and
              database-driven solutions.
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
                <ChartNoAxesCombined size={20} />
              </div>

              <div>
                <h4>Data-Driven Thinking</h4>

                <p>
                  Exploring datasets, identifying patterns, and communicating
                  insights through SQL, Python, and Power BI.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="about-small-card">
              <div className="small-card-icon">
                <Code2 size={20} />
              </div>

              <div>
                <h4>Full Stack Development</h4>

                <p>
                  Building web applications using React, Java, Spring Boot, REST
                  APIs, and MySQL.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="about-small-card">
              <div className="small-card-icon">
                <Lightbulb size={20} />
              </div>

              <div>
                <h4>Continuous Learning</h4>

                <p>
                  Improving technical skills, solving practical problems, and
                  learning industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK FACTS */}
        <div className="about-facts">
          <div className="fact-item">
            <strong>2026</strong>
            <span>B.Sc Computer Science</span>
          </div>

          <div className="fact-item">
            <strong>MCA</strong>
            <span>Expected 2028</span>
          </div>

          <div className="fact-item">
            <strong>Python & SQL</strong>
            <span>Data Analytics</span>
          </div>

          <div className="fact-item">
            <strong>Java & React</strong>
            <span>Full Stack Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
