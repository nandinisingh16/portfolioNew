import React, { useState } from "react";
import "../../src/style.css";
import SkillsTabs from "./skillsTabs.jsx";
import FutureGoals from "./FutureGoals.jsx";
import Project from "./project.jsx";

import headerImage from "../assets/img/portfolioimg.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";
import project6 from "../assets/img/project6.png";
import project9 from "../assets/img/project9.png";

/* =======================
   PROJECT DATA
======================= */

/* =======================
   COMPONENT
======================= */
const Portfolio = () => {

  return (
    <section className="portfolio">

      {/* ================= HEADER ================= */}
      <div className="header-container">
        <img src={headerImage} alt="Portfolio cover" className="cover" />
        <div className="intro">
          <h1>Portfolio</h1>
          <p>
            A collection of hands-on projects across <strong>Agentic AI</strong>,{" "}
            <strong>NLP</strong>, <strong>Computer Vision</strong>, and{" "}
            <strong>Frontend Development</strong>, focused on building scalable,
            production-ready systems.
            <br />
            View source code on{" "}
            <a
              href="https://github.com/nandinisingh16"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>.
          </p>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="about-section">
        <h2>Raj Nandini Singh</h2>
        <p>
          I’m a final-year Computer Science undergraduate at{" "}
          <strong>Amity University, Noida</strong>, specializing in{" "}
          <strong>Artificial Intelligence & Machine Learning</strong>.
          <br /><br />
          My work focuses on designing <strong>end-to-end ML systems</strong> —
          from data pipelines and modeling to evaluation and deployment —
          with recent experience in <strong>agentic AI workflows</strong>,
          deep learning, and full-stack integration.
        </p>
      </div>

      {/* ================= SKILLS ================= */}
      <SkillsTabs />

    

      {/* ================= TIMELINE ================= */}
      <div className="timeline-section">
        <h2 className="timeline-title">Experience Timeline</h2>

        <div className="timeline">
          <div className="timeline-container left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Generative AI Intern — PhotoGPT</h3>
              <p><em>Remote | May 2025 – July 2025</em></p>
              <ul>
                <li>Improved GenAI prompt consistency by 15%</li>
                <li>Automated evaluation pipelines reducing manual review by 30%</li>
                <li>Conducted A/B testing for content optimization</li>
              </ul>
            </div>
          </div>

          <div className="timeline-container right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Frontend Development Intern — Evephoria</h3>
              <p><em>Noida | Apr 2025 – Sep 2025</em></p>
              <ul>
                <li>Built performant UI components using React & TypeScript</li>
                <li>Reduced page load times by 20%</li>
                <li>Improved engagement via UI/UX optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LEADERSHIP ================= */}
      <div className="leadership-section">
        <h2>Leadership & Achievements</h2>

        <div className="achievements-grid">
          <div className="achievement-item">
            <h3>🏆 Top 5 — CyberCup 4.0 Hackathon</h3>
            <p>Designed an ML-based optimization solution at a national-level hackathon.</p>
          </div>

          <div className="achievement-item">
            <h3>🏒 Hockey Team Captain</h3>
            <p>Led university team to championship wins through strategy and teamwork.</p>
          </div>

          <div className="achievement-item">
            <h3>🎨 Creative Head — IoT Alliance Club</h3>
            <p>Organized technical workshops and university-wide tech events.</p>
          </div>

          <div className="achievement-item">
            <h3>📅 Event Organizer</h3>
            <p>Organized 5+ hackathons, seminars, and technical events.</p>
          </div>
        </div>
      </div>

      {/* ================= LINKS ================= */}
      <div className="more-projects-section">
        <h2>Explore More</h2>
        <div className="link-buttons">
          <a
            href="https://github.com/nandinisingh16"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raj-nandini-singh-618828250"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* ================= FUTURE GOALS ================= */}
      <FutureGoals />

    </section>
  );
};

export default Portfolio;
