import React from "react";
import "./Certifications.css";

const education = {
  degree: "B.E. Computer Science & Engineering",
  institution: "Sethu Institute of Technology",
  year: "Graduated 2026",
  score: "CGPA: 8.0 / 10",
};

const certifications = [
  {
    title: "Generative AI",
    issuer: "Infosys Springboard",
    type: "AI / GenAI",
  },
  {
    title: "Python Foundation",
    issuer: "Infosys Springboard",
    type: "Programming",
  },
  {
    title: "Natural Language Processing",
    issuer: "Infosys Springboard",
    type: "AI / NLP",
  },
  {
    title: "Machine Learning and AI Foundation",
    issuer: "Raspberry Pi",
    type: "Machine Learning",
  },
  {
    title: "Internet of Things (IoT)",
    issuer: "e-Yantra Lab / IEEE",
    type: "Hardware / IoT",
  },
];

export default function Certifications() {
  return (
    <section className="certs-section" id="certifications">
      <div className="certs-header">
        <p className="eyebrow">// CREDENTIALS</p>
        <h2 className="certs-title">Education & Certifications</h2>
        <p className="certs-sub">
          Academic foundations and continuous technical learning that power my engineering work.
        </p>
      </div>

      <div className="certs-layout">
        {/* LEFT: FEATURED EDUCATION CARD */}
        <div className="edu-feature-card">
          <div className="edu-feature-card__glow" />
          <div className="edu-feature-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" strokeLinejoin="round" />
              <path d="M6 10.5v5c0 1.4 2.7 3 6 3s6-1.6 6-3v-5" strokeLinejoin="round" />
              <path d="M20 9v6" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="edu-feature-card__title">Education</h3>
          
          <div className="edu-details">
            <h4 className="edu-degree">{education.degree}</h4>
            <p className="edu-inst">{education.institution}</p>
            
            <div className="edu-meta">
              <span className="edu-badge">{education.year}</span>
              <span className="edu-badge edu-badge--accent">{education.score}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: CERTIFICATIONS GRID */}
        <div className="certs-list">
          {certifications.map((cert, i) => (
            <div 
              className="cert-item" 
              key={cert.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="cert-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
              </div>
              <div className="cert-item__content">
                <span className="cert-item__type">{cert.type}</span>
                <h4 className="cert-item__title">{cert.title}</h4>
                <p className="cert-item__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}