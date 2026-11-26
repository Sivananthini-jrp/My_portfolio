import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__bg-grid" />
      
      <div className="experience__header">
        <p className="eyebrow">{"// PROFESSIONAL EXPERIENCE"}</p>
        <h2 className="experience__heading">
          Where I've <em>Made an Impact</em>
        </h2>
        <p className="experience__sub">
          My professional journey building AI automation, software applications, and intelligent systems.
        </p>
      </div>

      <div className="experience__container">
        <div className="exp-card">
          <div className="exp-card__accent-line" />
          
          <header className="exp-card__header">
            <div className="exp-card__meta">
              <span className="exp-card__period">Mar 2026 – Sep 2026</span>
              <span className="exp-card__type">Full-time</span>
            </div>
            
            <h3 className="exp-card__role">AI Automation Engineer</h3>
            <p className="exp-card__company">Wynsync Technologies</p>
          </header>

          <div className="exp-card__tech">
            <span className="tech-label">Core Stack:</span>
            <div className="chip-row">
              <span className="chip">Python & FastAPI</span>
              <span className="chip">React & JS</span>
              <span className="chip">Generative AI & LLMs</span>
              <span className="chip">REST APIs</span>
              <span className="chip">PostgreSQL & MongoDB</span>
              <span className="chip">WhatsApp API & AWS</span>
            </div>
          </div>

          <div className="exp-card__body">
            <h4 className="exp-card__body-title">Key Contributions</h4>
            <ul className="exp-list">
              <li>
                <span className="exp-list__icon">▹</span>
                <div>
                  <strong>AI & Automation:</strong> Built AI-powered applications and automated complex business workflows using Generative AI and LLMs.
                </div>
              </li>
              <li>
                <span className="exp-list__icon">▹</span>
                <div>
                  <strong>Full-Stack Development:</strong> Engineered backend REST APIs (Python, FastAPI, Node.js) and responsive frontends (React, Tailwind) to support core application features.
                </div>
              </li>
              <li>
                <span className="exp-list__icon">▹</span>
                <div>
                  <strong>Integrations & Data:</strong> Connected third-party services (WhatsApp Cloud API, AWS SES) via webhooks and managed relational/NoSQL databases for reliable data flow.
                </div>
              </li>
              <li>
                <span className="exp-list__icon">▹</span>
                <div>
                  <strong>Testing & Ownership:</strong> Independently managed feature development, debugged API/database issues, and conducted comprehensive end-to-end testing using Postman.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}