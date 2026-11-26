import React, { useRef } from "react";
import "./Home.css";
import portrait from "../assets/portfolio pic.png";
// Importing the PDF from the src folder
import resumePdf from "../resume.pdf";

const metrics = [
  "AI AUTOMATION → WORKFLOW OPTIMIZATION → INTELLIGENT SOLUTIONS",
  "GENERATIVE AI · LLMs · RAG · AI AGENTS",
  "PYTHON · FASTAPI · REACT · API INTEGRATION",
  "FOCUS: AI AUTOMATION & INTELLIGENT SYSTEMS",
];

export default function Home() {
  const heroRef = useRef(null);
  const frameRef = useRef(null);

  // 3D tilt on the portrait
  const handleTilt = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (frameRef.current)
      frameRef.current.style.transform =
        "perspective(900px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div className="home">
      {/* ---------- HERO ---------- */}
      <header className="hero" ref={heroRef}>
        <div className="hero__text">
          <p className="eyebrow">// AI AUTOMATION ENGINEER</p>

          <h1 className="hero__name">
            {"Sivananthini Jeyamurugan".split("").map((ch, i) => (
              <span
                key={i}
                className="letter"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>

          <p className="hero__role">
            I turn <em>complex workflows</em> into intelligent,
            automated solutions.
          </p>

          <p className="hero__desc">
            AI Automation Engineer with hands-on experience in
            developing AI-powered applications, workflow automation,
            API integrations, and intelligent systems. Currently
            working at Wynsync Technologies, building practical
            solutions using Generative AI, LLMs, Python, and modern
            web technologies to solve real-world problems.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View my projects
            </a>

            <a
              className="btn btn--ghost"
              href={resumePdf} // Using the imported variable
              download="Sivananthini_Jeyamurugan_Resume.pdf" // Forces a clean file name
            >
              Download résumé
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div
            className="frame"
            ref={frameRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <img
              src={portrait}
              alt="Sivananthini Jeyamurugan, AI Automation Engineer"
            />
            <span className="frame__tag frame__tag--tl">
              FIG. 01
            </span>
            <span className="frame__tag frame__tag--br">
              STATUS: BUILDING
            </span>
            <span className="frame__scan" />
          </div>
        </div>
      </header>

      {/* ---------- METRIC TICKER ---------- */}
      <div className="ticker" aria-hidden="false">
        <div className="ticker__track">
          {[...metrics, ...metrics].map((m, i) => (
            <span className="ticker__item" key={i}>
              {m}
              <span className="ticker__dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}