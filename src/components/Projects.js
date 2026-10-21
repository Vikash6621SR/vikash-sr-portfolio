import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "DATA ANALYTICS PROJECT",
      title: "Telco Customer Churn Analysis",
      description:
        "An end-to-end data analytics project analyzing 7,043 telecom customer records to understand churn patterns. Includes data cleaning and validation, SQL analysis, and an interactive Power BI dashboard to identify customer segments and retention opportunities.",

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "MySQL",
        "Power BI",
        "Git",
        "GitHub",
      ],

      icon: "DA",

      github: "https://github.com/Vikash6621SR/Customer-Churn-Analysis",
      live: null,
    },

    {
      number: "02",
      category: "FULL STACK WEB DEVELOPMENT PROJECT",
      title: "Finance Planner",
      description:
        "A responsive personal finance planner designed to help users manage income, expenses, and monthly budgets with interactive expense tracking and budget calculations.",

      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],

      icon: "FP",

      github: "https://github.com/Vikash6621SR/Finance_Tracker",
      live: null,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-heading projects-heading">
          <span className="section-label">PROJECTS</span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A selection of projects showcasing my skills in data analytics,
            programming, and practical problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
              data-category={project.category}
            >
              {/* Project Header */}
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              {/* Project Visual */}
              <div className="project-visual">
                <div className="project-grid-pattern"></div>
                <div className="project-logo">{project.icon}</div>

                <div className="project-code-decoration">
                  <span>&lt;/&gt;</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <Code2 size={18} />
                </div>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={16} />
                    GitHub
                    <ExternalLink size={15} />
                  </a>

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-live-link"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="project-arrow">
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <div className="projects-footer-line"></div>

          <span>More projects coming soon</span>

          <div className="projects-footer-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
