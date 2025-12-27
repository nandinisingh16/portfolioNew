import React, { useState } from "react";
import "../../src/style.css";

import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";
import project6 from "../assets/img/project6.png";
import project9 from "../assets/img/project9.png";

const projects = [
  {
    title: "Automated Data Preprocessing & Feature Engineering Pipeline",
    image: project9,
    summary: [
      "Automated data ingestion, cleaning, and validation to support faster exploratory analysis",
      "Reduced manual preprocessing time from 2 hours to 15 minutes (88% improvement)",
      "Designed reusable pipeline components to improve experiment consistency across datasets"
    ],
    tags: ["Python", "Llama 3", "Agentic AI", "Data Pipelines,EDA, Feature Engineering, Data Science"],
    links: {
      github: "https://github.com/nandinisingh16/Autonomous_data-preprocessing_pipeline"
    }
  },
  {
    title: "YouTube Sentiment Analysis – End-to-End ML Pipeline",
    image: project3,
    summary: [
      "Built production-grade sentiment analysis pipeline achieving 85% accuracy",
      "Implemented automated retraining and model versioning workflow",
      "Optimized feature engineering to reduce inference latency by 30%"
    ],
    tags: ["Python", "LightGBM", "TF-IDF", "Model Deployment"],
    links: {
      github: "https://github.com/nandinisingh16/sentimentAnalysis"
    }
  },
  {
    title: "Human Activity Recognition with Real-Time Inference",
    image: project1,
    summary: [
      "Designed hybrid CNN + LSTM architecture achieving 87% accuracy on UCF50 dataset",
      "Applied advanced data augmentation improving robustness by 15%",
      "Implemented real-time video inference using OpenCV"
    ],
    tags: ["PyTorch", "CNN", "LSTM", "Computer Vision"],
    links: {
      github: "https://github.com/nandinisingh16/actionRecognition"
    }
  },
  {
    title: "Conditional GAN for Age-Based Image Generation",
    image: project2,
    summary: [
      "Developed Conditional GAN for controlled age-based face image synthesis",
      "Improved training stability using label conditioning techniques",
      "Generated synthetic datasets for downstream CV experiments"
    ],
    tags: ["GANs", "PyTorch", "Deep Learning", "Image Generation"],
    links: {
      github: "https://github.com/nandinisingh16/genAI"
    }
  },
  {
    title: "Resume ATS Analytics Platform",
    image: project5,
    summary: [
      "Built NLP-driven resume scoring and skill-gap analysis platform",
      "Performed large-scale EDA on job market skill trends",
      "Deployed end-to-end ML pipeline via interactive Streamlit dashboard"
    ],
    tags: ["NLP", "Streamlit", "Machine Learning"],
    links: {
      github: "https://github.com/nandinisingh16/IsMyResumeCooked"
    }
  },
  {
    title: "Sportx",
    image: project4,
    summary: [
      "A React-based frontend platform designed to connect local sports enthusiasts, enabling event discovery, participation, and community interaction.",
      "Implemented responsive UI components and smooth navigation flows, improving usability across desktop and mobile devices.",
      "Focused on performance optimization and clean component architecture, ensuring scalable and maintainable frontend code."
     
    ],
    tags: ["React", "Frontend", "CSS", "Git/Github", "Web Development"],
    links: {
      github: "https://sportx-7e9y.onrender.com/"
  }
}
];

const Project = () => {
const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };
  return (
<div className="project-grid single-project">
        <h1>Personal Projects</h1>

        <div className="card large-card">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="card-img"
          />

          <div className="card-content">
            <h3>{projects[currentIndex].title}</h3>

            <ul>
              {projects[currentIndex].summary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="tags">
              {projects[currentIndex].tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="card-links">
              <a
                href={projects[currentIndex].links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-nav bottom-nav">
          <button onClick={handlePrev} className="nav-btn">
            Previous
          </button>
          <span className="project-count">
            {currentIndex + 1} / {projects.length}
          </span>
          <button onClick={handleNext} className="nav-btn">
            Next
          </button>
        </div>
      </div>);}

export default Project;