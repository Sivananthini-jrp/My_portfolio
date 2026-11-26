import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <p className="eyebrow">// TECHNICAL CAPABILITIES</p>
        <h2 className="skills-title">What I Build & Engineer</h2>
        <p className="skills-sub">
          From intelligent AI applications to automated workflows — 
          turning technical ideas into working software solutions.
        </p>
      </div>

      <div className="bento-grid">
        {/* FEATURED: AI & GENAI */}
        <div className="bento-card bento-card--large">
          <div className="bento-card__glow" />
          <div className="bento-card__header">
            <span className="bento-card__icon">✦</span>
            <h3 className="bento-card__title">AI & Generative AI</h3>
          </div>
          <p className="bento-card__desc">
            Integrating large language models and building document-aware AI systems with contextual retrieval.
          </p>
          <div className="bento-card__chips">
            {["Generative AI", "LLM Integration", "RAG", "AI Agents", "Prompt Engineering", "Vector Search"].map(skill => (
              <span className="chip chip--accent" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="bento-card">
          <div className="bento-card__header">
            <span className="bento-card__icon">⚙</span>
            <h3 className="bento-card__title">Backend Engineering</h3>
          </div>
          <p className="bento-card__desc">
            Building reliable APIs, server logic, and database integrations.
          </p>
          <div className="bento-card__chips">
            {["Python", "FastAPI", "Node.js", "Express", "REST APIs", "SQLAlchemy"].map(skill => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* FRONTEND */}
        <div className="bento-card">
          <div className="bento-card__header">
            <span className="bento-card__icon">◈</span>
            <h3 className="bento-card__title">Frontend Development</h3>
          </div>
          <p className="bento-card__desc">
            Crafting responsive and interactive user interfaces.
          </p>
          <div className="bento-card__chips">
            {["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Vite"].map(skill => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* DATABASES & INFRASTRUCTURE */}
        <div className="bento-card">
          <div className="bento-card__header">
            <span className="bento-card__icon">◫</span>
            <h3 className="bento-card__title">Database & Infrastructure</h3>
          </div>
          <p className="bento-card__desc">
            Managing data flow and cloud services.
          </p>
          <div className="bento-card__chips">
            {["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "AWS SES"].map(skill => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* TOOLS & AUTOMATION */}
        <div className="bento-card bento-card--wide">
          <div className="bento-card__header">
            <span className="bento-card__icon">⚡</span>
            <h3 className="bento-card__title">Automation, Integration & Tools</h3>
          </div>
          <p className="bento-card__desc">
            Connecting systems, automating processes, and ensuring end-to-end functionality.
          </p>
          <div className="bento-card__chips">
            {["Workflow Automation", "API Integration", "Webhooks", "Git & GitHub", "Postman", "JWT", "AI Testing & Evaluation", "System Debugging"].map(skill => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}