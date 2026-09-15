import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe,
  Users,
  Wrench,
} from "lucide-react";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Programming",
      description: "Core programming languages and development fundamentals.",
      icon: Code2,
      skills: ["Java", "Python", "C", "C++", "JavaScript"],
    },

    {
      number: "02",
      title: "Web & Backend",
      description: "Technologies used to build modern web applications.",
      icon: Globe,
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
      title: "Database",
      description: "Database technology used for application development.",
      icon: Database,
      skills: ["MySQL"],
    },

    {
      number: "04",
      title: "Technical Domains",
      description: "Areas of technical interest and hands-on exposure.",
      icon: Brain,
      skills: [
        "Machine Learning",
        "Ethical Hacking",
        "Mobile Application Development",
        "Responsive Web Design",
      ],
    },

    {
      number: "05",
      title: "Tools & Platforms",
      description: "Development tools and platforms used across projects.",
      icon: GitBranch,
      skills: ["IntelliJ IDEA", "VS Code", "Postman", "XAMPP", "Git"],
    },

    {
      number: "06",
      title: "Professional Strengths",
      description:
        "Personal strengths that support technical and team environments.",
      icon: Users,
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
      {/* Background */}
      <div className="skills-glow"></div>

      <div className="skills-container">
        {/* =================================
            SECTION HEADER
        ================================== */}

        <div className="section-header">
          <div className="section-label">
            <span></span>
            MY SKILLS
          </div>

          <h2>
            Tools I use to turn
            <span> ideas into reality.</span>
          </h2>

          <p>
            A combination of programming knowledge, development experience,
            technical interests, and professional strengths built through
            academics and practical work.
          </p>
        </div>

        {/* =================================
            SKILLS GRID
        ================================== */}

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article className="skill-card" key={category.number}>
                {/* Card Number */}
                <div className="skill-card-number">{category.number}</div>

                {/* Icon */}
                <div className="skill-icon">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div className="skill-card-content">
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  {/* Skill Tags */}
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

        {/* =================================
            BOTTOM NOTE
        ================================== */}

        <div className="skills-bottom">
          <div className="skills-bottom-icon">
            <Wrench size={19} />
          </div>

          <p>
            Always learning, experimenting, and improving my technical skill set
            through projects and practical experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
