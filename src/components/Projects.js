import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "FULL STACK APPLICATION",
      title: "FoodExpress",
      description:
        "A complete food ordering platform with authentication, restaurant management, subscriptions, and a responsive user interface.",

      technologies: [
        "Java",
        "Spring Boot",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MySQL",
      ],

      icon: "FE",

      github: "https://github.com/Vikash6621SR/FoodExpress",
      live: "#",
    },

    {
      number: "02",
      category: "WEB APPLICATION",
      title: "Finance Planner",
      description:
        "A responsive personal finance planner designed to help users manage income, expenses, and monthly budgets with interactive expense tracking and budget calculations.",

      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],

      icon: "FP",

      github: "https://github.com/Vikash6621SR/Finance_Tracker",
      live: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="section-heading projects-heading">
          <span className="section-label">PROJECTS</span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A selection of applications and projects where I applied my
            technical skills to build practical solutions.
          </p>
        </div>

        {/* =================================
            PROJECT GRID
        ================================= */}

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              {/* Project Top */}
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

              {/* Project Content */}
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

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="project-link project-live-link"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="project-arrow">
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>

        {/* =================================
            PROJECT FOOTER
        ================================= */}

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
