import {
  Award,
  ExternalLink,
  Sparkles,
  Code2,
  Palette,
  BarChart3,
} from "lucide-react";

import "./Certifications.css";

const certifications = [
  {
    number: "01",
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    platform: "Coursera",
    date: "March 2026",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    platform: "Coursera",
    date: "March 2026",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Generative AI: Enhance Your Data Analytics Career",
    issuer: "IBM",
    platform: "Coursera",
    date: "March 2026",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    platform: "Coursera",
    date: "February 2026",
    icon: Palette,
  },
  {
    number: "05",
    title: "Practical Python: Start Your Programming Journey",
    issuer: "Duke University",
    platform: "Coursera",
    date: "December 2025",
    icon: Code2,
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        {/* Header */}
        <div className="section-heading certifications-heading">
          <span className="section-label">
            <Award size={15} />
            CERTIFICATIONS
          </span>

          <h2>
            Always learning.
            <span> Always improving.</span>
          </h2>

          <p>
            Certifications that reflect my interest in modern technology,
            artificial intelligence, programming, analytics, and user
            experience.
          </p>
        </div>

        {/* Certification List */}
        <div className="certifications-list">
          {certifications.map((certification) => {
            const Icon = certification.icon;

            return (
              <div className="certification-card" key={certification.number}>
                <div className="certification-number">
                  {certification.number}
                </div>

                <div className="certification-icon">
                  <Icon size={22} />
                </div>

                <div className="certification-content">
                  <h3>{certification.title}</h3>

                  <div className="certification-meta">
                    <span>{certification.issuer}</span>
                    <span className="meta-dot"></span>
                    <span>{certification.platform}</span>
                    <span className="meta-dot"></span>
                    <span>{certification.date}</span>
                  </div>
                </div>

                <div className="certification-arrow">
                  <ExternalLink size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
