import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      icon: <Code2 size={21} />,
      title: "Programming",
      description: "Languages I use to build software and solve problems.",
      skills: ["Java", "Python", "C", "C++", "JavaScript"],
    },

    {
      number: "02",
      icon: <Globe size={21} />,
      title: "Web & Backend",
      description: "Technologies for creating modern web applications.",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js",
        "Spring Boot",
        "REST APIs",
      ],
    },

    {
      number: "03",
      icon: <Database size={21} />,
      title: "Database",
      description: "Working with relational databases and application data.",
      skills: ["MySQL"],
    },

    {
      number: "04",
      icon: <Brain size={21} />,
      title: "Technical Domains",
      description: "Areas I have explored through learning and projects.",
      skills: [
        "Machine Learning",
        "Ethical Hacking",
        "Mobile Application Development",
        "Responsive Web Design",
      ],
    },

    {
      number: "05",
      icon: <Wrench size={21} />,
      title: "Tools & Platforms",
      description: "Tools used during development and testing.",
      skills: ["IntelliJ IDEA", "VS Code", "Postman", "XAMPP", "Git"],
    },

    {
      number: "06",
      icon: <Users size={21} />,
      title: "Professional Strengths",
      description: "Skills that support effective teamwork and execution.",
      skills: [
        "Quick Learning",
        "Teamwork",
        "Communication",
        "Problem Solving",
        "Leadership",
        "Discipline",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="section-heading skills-heading">
          <span className="section-label">SKILLS & EXPERTISE</span>

          <h2>
            Tools I use to turn
            <span> ideas into reality.</span>
          </h2>

          <p>
            A growing technical toolkit built through academic learning,
            internships, projects and hands-on development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.number}>
              {/* Number */}
              <span className="skill-number">{category.number}</span>

              {/* Icon */}
              <div className="skill-icon">{category.icon}</div>

              {/* Content */}
              <div className="skill-card-content">
                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </div>

              {/* Skills */}
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="skills-highlight">
          <div className="highlight-icon">
            <GitBranch size={21} />
          </div>

          <div className="highlight-content">
            <strong>Always expanding my toolkit</strong>

            <p>
              I enjoy learning new technologies and applying them to practical
              problems and real-world applications.
            </p>
          </div>

          <div className="highlight-badge">Learning</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
