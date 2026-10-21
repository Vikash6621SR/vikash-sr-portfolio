import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe,
  Users,
  Wrench,
  ChartNoAxesCombined,
} from "lucide-react";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Data Analytics",
      description:
        "Tools and techniques for analyzing data and communicating business insights.",
      icon: ChartNoAxesCombined,
      skills: [
        "Python",
        "Pandas",
        "SQL",
        "MySQL",
        "Power BI",
        "DAX",
        "Data Cleaning",
        "Data Visualization",
        "KPI Reporting",
      ],
    },

    {
      number: "02",
      title: "Programming",
      description:
        "Programming languages used for application development and analysis.",
      icon: Code2,
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "C++",
        "SQL",
        "Object-Oriented Programming",
      ],
    },

    {
      number: "03",
      title: "Frontend Development",
      description: "Building responsive and user-friendly web interfaces.",
      icon: Globe,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React.js",
        "Bootstrap",
        "Responsive Web Design",
      ],
    },

    {
      number: "04",
      title: "Backend Development",
      description:
        "Developing server-side applications and connecting services through APIs.",
      icon: Brain,
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Spring Data JPA",
        "Hibernate",
        "MVC Architecture",
        "Microservices Fundamentals",
      ],
    },

    {
      number: "05",
      title: "Databases & Tools",
      description: "Working with relational databases and development tools.",
      icon: Database,
      skills: [
        "MySQL",
        "SQL Joins",
        "Subqueries",
        "Database Design",
        "Git",
        "GitHub",
        "Postman",
        "Maven",
        "Docker",
        "VS Code",
        "IntelliJ IDEA",
      ],
    },

    {
      number: "06",
      title: "Professional Strengths",
      description:
        "Skills that support collaboration, analytical work, and continuous improvement.",
      icon: Users,
      skills: [
        "Analytical Thinking",
        "Problem Solving",
        "Teamwork",
        "Communication",
        "Leadership",
        "Time Management",
        "Adaptability",
        "Quick Learning",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      {/* Background */}
      <div className="skills-glow"></div>

      <div className="skills-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-label">
            <span></span>
            TECHNICAL SKILLS
          </div>

          <h2>
            Data, development,
            <span> and problem solving.</span>
          </h2>

          <p>
            My technical skill set combines data analytics, programming,
            frontend and backend development, database management, and tools
            used to build and deliver practical solutions.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="skill-card" key={category.number}>
                <div className="skill-card-number">{category.number}</div>

                <div className="skill-icon">
                  <Icon size={22} />
                </div>

                <div className="skill-card-content">
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <div className="skill-tags">
                    {category.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div className="skills-bottom">
          <div className="skills-bottom-icon">
            <Wrench size={19} />
          </div>

          <p>
            Continuously strengthening my analytics and software development
            skills through hands-on projects, practical problem solving, and
            ongoing learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
