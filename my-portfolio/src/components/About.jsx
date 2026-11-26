import React from "react";
import "./About.css";

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Sethu Institute of Technology",
    year: "2022 – 2026",
    score: "CGPA 8.0 / 10",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "State Board",
    year: "2022",
    score: "77%",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "State Board",
    year: "2020",
    score: "61%",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <p className="eyebrow">{"// ABOUT ME"}</p>

      <h2 className="about-section__heading">
        Engineering intelligent systems through{" "}
        <em>AI, automation, and innovation.</em>
      </h2>

      <div className="about-section__grid">
        {/* ---------- LEFT: BIO ---------- */}
        <div className="about-section__copy">
          <p>
            I'm a <strong>2026 Computer Science &amp; Engineering graduate</strong>{" "}
            from <strong>Sethu Institute of Technology</strong>, working as an{" "}
            <strong>AI Automation Engineer</strong> at Wynsync Technologies.
          </p>

          <p>
            I build backend services with <strong>Python and FastAPI</strong>,
            frontends with <strong>React</strong>, and integrate APIs,
            databases, and third-party services — while exploring{" "}
            <strong>Generative AI, LLMs, and RAG</strong> through practical
            projects.
          </p>

          <p>
            My goal is to build <strong>reliable, intelligent, AI-powered
            systems</strong> that make everyday processes smarter and more
            efficient.
          </p>

          <div className="callout">
            <span className="callout__check">✓</span>
            <span>Curious by nature, engineer by practice.</span>
          </div>
        </div>

        {/* ---------- RIGHT: ANIMATED TIMELINE ---------- */}
        <div className="education">
          <h3 className="education__title">Education</h3>

          <div className="timeline">
            {education.map((edu, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                  {i < education.length - 1 && <div className="timeline-line" />}
                </div>

                <div className="edu-card">
                  <div className="edu-card__top">
                    <span className="edu-card__year">{edu.year}</span>
                    <span className="edu-card__score">{edu.score}</span>
                  </div>
                  <h4 className="edu-card__degree">{edu.degree}</h4>
                  <p className="edu-card__institution">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}