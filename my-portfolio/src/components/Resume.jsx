import React from "react";
import "./Resume.css";
// Importing the PDF from the src folder
import resumePdf from "../resume.pdf";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-header">
        <p className="eyebrow">// RESUME</p>
        <h2 className="resume-title">Professional Profile</h2>
        <p className="resume-sub">
          A quick overview of my professional profile and technical expertise.
        </p>
      </div>

      <div className="resume-card">
        {/* Decorative tech corners */}
        <div className="resume-card__corner resume-card__corner--tl" />
        <div className="resume-card__corner resume-card__corner--tr" />
        <div className="resume-card__corner resume-card__corner--bl" />
        <div className="resume-card__corner resume-card__corner--br" />

        <div className="resume-card__content">
          <div className="resume-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <p className="resume-card__summary">
            Gen AI Developer and AI Automation Engineer with hands-on experience in{" "}
            <strong>Generative AI, workflow automation, backend development,</strong>{" "}
            and API integrations. Experienced in building intelligent
            applications using Python, FastAPI, React, and LLM technologies.
            Passionate about developing practical AI solutions that automate
            processes and solve real-world problems.
          </p>

          <a
            className="resume-card__cta"
            href={resumePdf} // Using the imported variable
            download="Sivananthini_Jeyamurugan_Resume.pdf" // Forces a clean file name on download
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12" strokeLinecap="round" />
              <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19.5h16" strokeLinecap="round" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}