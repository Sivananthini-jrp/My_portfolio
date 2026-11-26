import React, { useState } from "react";
import "./CaseStudies.css";

const projects = [
  {
    id: "01",
    tag: "Professional Project",
    title: "WynReach Platform",
    subtitle: "AI Communication Platform",
    skills: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "AWS"],
    description:
      "Contributed to a multi-tenant SaaS platform for bulk WhatsApp and Email campaigns. Built backend APIs, managed database integrations, handled webhooks, and engineered automated messaging workflows.",
    href: "#",
    linkText: "Internal Project (Details on request)",
    isLive: false,
  },
  {
    id: "02",
    tag: "Generative AI",
    title: "RAG Document Analyzer",
    subtitle: "Intelligent Q&A System",
    skills: ["Python", "LangChain", "FastAPI", "Vector Search"],
    description:
      "Built a RAG-based document Q&A application that retrieves relevant content from uploaded documents and generates context-based answers with source citations to improve answer traceability.",
    href: "https://document-qa-rag-za88.onrender.com",
    linkText: "View Live Demo",
    isLive: true,
  },
  {
    id: "03",
    tag: "AI Engineering",
    title: "EvalForge AI",
    subtitle: "LLM Evaluation Platform",
    skills: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    description:
      "Built a platform for model comparison, experiment execution, response evaluation, and hallucination analysis. Designed to help developers measure and improve LLM performance.",
    href: "https://evalforge-ai-1.onrender.com/",
    linkText: "View Live Demo",
    isLive: true,
  },
  {
    id: "04",
    tag: "Agentic AI",
    title: "TestPilot AI",
    subtitle: "Autonomous Testing Agent",
    skills: ["Python", "LangGraph", "LLM Agents", "Test Automation"],
    description:
      "An agent-based system for test generation, automated execution, bug detection, and structured reporting. Designed to reduce repetitive manual testing through intelligent automation.",
    href: "#",
    linkText: "Demo Coming Soon",
    isLive: false,
  },
];

export default function CaseStudy() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="case-study-split" id="work">
      <div className="case-study__header">
        <p className="eyebrow">// PORTFOLIO</p>
        <h2 className="case-study__title">MY PROJECTS</h2>
      </div>

      <div className="split-container">
        {/* LEFT: INTERACTIVE LIST */}
        <div className="split-list">
          {projects.map((p) => (
            <button
              key={p.id}
              className={`split-item ${activeProject.id === p.id ? "is-active" : ""}`}
              onMouseEnter={() => setActiveProject(p)}
              onClick={() => setActiveProject(p)}
            >
              <span className="split-item__num">{p.id}</span>
              <span className="split-item__title">{p.title}</span>
              <span className="split-item__arrow">→</span>
            </button>
          ))}
        </div>

        {/* RIGHT: DYNAMIC PREVIEW */}
        <div className="split-preview">
          <div className="preview-card">
            <div className="preview-card__glow" />
            
            <div className="preview-header">
              <span className="preview-tag">{activeProject.tag}</span>
              <span className="preview-icon">✦</span>
            </div>

            <h3 className="preview-title">{activeProject.title}</h3>
            <p className="preview-subtitle">{activeProject.subtitle}</p>

            <p className="preview-desc">{activeProject.description}</p>

            <div className="preview-divider" />

            <div className="preview-skills">
              {activeProject.skills.map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>

            <div className="preview-footer">
              {activeProject.isLive ? (
                <a 
                  className="preview-link" 
                  href={activeProject.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {activeProject.linkText} 
                  <span className="link-arrow">↗</span>
                </a>
              ) : (
                <span className="preview-link preview-link--disabled">
                  {activeProject.linkText}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}