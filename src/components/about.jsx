import React from "react";
import "../style.css";
import profileImage from "../assets/img/aboutimg.png";

const About = () => {
  return (
    <section id="about" className="about-full">
      {/* Top Cover Section */}
      <div className="about-hero">
        <img src={profileImage} alt="Raj Nandini Singh" className="about-hero-image" />
        <div className="about-hero-text">
          <h1>RAJ NANDINI SINGH</h1>
          <h2 className="aboutme">Data Science | Machine Learning  | AI Research</h2>
          <a href="https://drive.google.com/file/d/1Kszv1FiCimoXJ2w68vyKbElQoX9TUkaX/view?usp=sharing" className="hero-btn" target="_blank" rel="noopener noreferrer">
            Download Resume
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
    I’m <strong style={{ color: "#222" }}>Raj Nandini Singh</strong>, a final-year Computer Science student at Amity University (AI minor) aspiring Data Scientist, focused on extracting insights from data and building predictive models that drive business decisions. My strengths lie in EDA, feature engineering, statistical analysis, and applied machine learning across NLP and computer vision use cases.
    </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
      marginBottom: "15px",
    }}
  >Recently, I’ve worked on  <strong style={{ color: "#222" }}>agentic AI pipelines for automated data preprocessing, production-grade sentiment analysis systems</strong>, and  <strong style={{ color: "#222" }}>real-time human activity recognition models</strong> using deep learning. I enjoy working at the intersection of modeling, evaluation, and deployment—where ideas meet reality.
    </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
      marginBottom: "15px",
    }}
  >As a  <strong style={{ color: "#222" }}>Generative AI Intern at PhotoGPT</strong>, I designed prompt strategies that improved theme consistency by 15% and built automated evaluation pipelines that reduced manual review effort by 30%. I’ve also contributed as a  <strong style={{ color: "#222" }}>Frontend Intern at Evephoria</strong>, optimizing React-based interfaces to cut page load time by 20% and boost user engagement.
      </p>

  <p
    style={{
      lineHeight: "1.8",
      fontSize: "1rem",
      color: "#333",
    }}
  >Outside of tech, I’m the  <strong style={{ color: "#222" }}> Hockey Team Captain</strong> and <strong style={{ color: "#222" }}>Creative Head of the IoT Alliance Club</strong>, leading teams, organizing tech events, and competing at a championship level. I’m currently seeking <strong style={{ color: "#222" }}>Data Scientist / ML Engineer</strong> roles where I can build scalable, impact-driven AI systems.
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
            Want to chat? <a href="mailto:nandinisingh1622@gmail.com">Email me</a> | Phone: 770-597-9461 | Noida, India
          </p>
          <p className="contact">Connect on social platforms —</p>
          <a href="https://linkedin.com/in/raj-nandini2216" className="hero-btns" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/nandinisingh16" className="hero-btns" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.kaggle.com/rajnandinisingh2216" className="hero-btns" target="_blank" rel="noopener noreferrer">
            Kaggle
          </a>
          <a href="https://portfolio-new-gamma-eight.vercel.app/" className="hero-btns" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
