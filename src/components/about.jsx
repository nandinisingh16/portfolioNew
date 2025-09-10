import React from "react";
import "../../src/style.css";
import profileImage from "../assets/img/aboutimg.png";

const About = () => {
  return (
    <section id="about" className="about-full">
      {/* Top Cover Section */}
      <div className="about-hero">
        <img src={profileImage} alt="Raj Nandini Singh" className="about-hero-image" />
        <div className="about-hero-text">
          <h1>Raj Nandini Singh</h1>
          <p>Click here to download my CV and check out my portfolio.</p>
          <a href="https://drive.google.com/file/d/1bzaXXd1dCRL0ZAf6MGugdnSGjmeMbKcp/view?usp=sharing" className="hero-btn" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>

      {/* About Details */}
      <div className="about-content">
      <div className="about-block">
  <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>About Me</h2>
  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
      marginBottom: "15px",
    }}
  >
    I’m <strong style={{ color: "#222" }}>Raj Nandini Singh</strong>, an aspiring{" "}
    <span style={{ color: "#444", fontWeight: "600" }}>AI/ML engineer</span> with a strong
    foundation in C, C++, Python, and Data Structures & Algorithms. My focus lies in applying{" "}
    <span style={{ color: "#555", fontStyle: "italic" }}>Deep Learning, NLP, Generative AI,</span>{" "}
    and <span style={{ color: "#555", fontStyle: "italic" }}>Computer Vision</span> to solve real-world problems, 
    with projects such as Human Activity Recognition, SpendVision, and Image Generation using Conditional GAN.
  </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
      marginBottom: "15px",
    }}
  >
    I enjoy exploring the frontier of{" "}
    <span style={{ fontWeight: "600", color: "#444" }}>
      machine learning, AI research, and practical applications
    </span>
    , and I’m continuously building projects that connect innovation with impact—from intelligent
    web applications to research-driven ML solutions. My goal is to grow into a role where I can
    design and deploy scalable AI systems that create meaningful value.
  </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
      marginBottom: "15px",
    }}
  >
    Recent work: <strong style={{ color: "#444" }}>Human Activity Recognition</strong> (Deep Learning, 
    video inference), <strong style={{ color: "#444" }}>sportX</strong> — a platform for sports enthusiasts, 
    and <strong style={{ color: "#444" }}>SpendVision AI</strong> — a voice-powered smart expense tracker.
  </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
    }}
  >
    Outside tech: I play hockey, mentor juniors, join hackathons, and explore new tech.
  </p>
</div>


        <div className="about-block">
          <h2>About This Website</h2>
          <p>
            My personal portfolio  — where I share projects, and findings from my learning journey.
          </p>
          <ul>
            <li>📁 Web & ML projects</li>
            <li>📚 Research & publications</li>
            <li>🥇 Coding & AI challenges</li>
            <li>🖥 Certifications & courses</li>
            <li>🎓 Academic work</li>
          </ul>
        </div>

        <div className="about-block">
          <h2>Contact</h2>
          <p>
            Want to chat? <a href="mailto:nandinisingh1622@gmail.com">Email me</a>.
          </p>
          <p className="contact">Connect on social platforms —</p>
          <a href="https://www.linkedin.com/in/raj-nandini-singh-618828250" className="hero-btns" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/Raj03Nandini2216/" className="hero-btns" target="_blank" rel="noopener noreferrer">
            Leetcode
          </a>
          <a href="https://github.com/nandinisingh16" className="hero-btns" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.kaggle.com/rajnandinisingh2216" className="hero-btns" target="_blank" rel="noopener noreferrer">
            Kaggle
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
