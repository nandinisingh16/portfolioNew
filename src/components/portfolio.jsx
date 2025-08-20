import React, { useState } from "react";
import '../../src/style.css';
import SkillsTabs from "./skillsTabs.jsx";
import FutureGoals from "./FutureGoals.jsx";
import headerImage from "../assets/img/portfolioimg.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project6 from "../assets/img/project6.png";


const projects = [
  {
    title: " Spend Vision AI – Smart Expense Tracker",
    image: project3,
    summary: [
      "NLP-powered expense tracker that understands natural voice/text inputs.",
      "Extracts amount, category, date and shows visual analytics with alerts.",
      "Works on rules, regex, and basic transformers for classification."
    ],
    tags: ["NLP", "Python", "Flask", "Matplotlib", "AI"],
    links: {
      github: "https://github.com/nandinisingh16/SpendVision"
    }
  },
  {
    title: " Human Action Recognition",
    image: project1,
    summary: [
      "Built a CNN + LSTM model using TensorFlow for recognizing human actions from video.",
      "Used UCF50 and UCF101 datasets for training and evaluation.",
      "Displayed predicted labels and keypoints in processed video output."
    ],
    tags: ["TensorFlow", "Computer Vision", "Deep Learning", "OpenCV"],
    links: {
      readMore: "#",
      github: "https://github.com/nandinisingh16/actionRecognition/tree/main",
      watch: "#"
    }
  },
  {
    title: " Age-Conditional Image Generation",
    image: project2,
    summary: [
      "Implemented a Conditional GAN for generating facial images based on age input.",
      "Trained on CelebA dataset using PyTorch and image augmentation techniques.",
      "Focused on identity preservation across age domains."
    ],
    tags: ["GANs", "Deep Learning", "PyTorch", "Conditional Generation"],
    links: {
      readMore: "#",
      github: "https://github.com/nandinisingh16/genAI"
    }
  },
  
  {
    title: " sportX – Sports Enthusiast Connector",
    image: project4,
    summary: [
      "A frontend platform to connect people for playing sports together locally.",
      "Designed with Tailwind and React; location & interest-based filtering.",
      "Backend integration and real-time updates in progress."
    ],
    tags: ["React", "Tailwind", "Frontend", "User Interaction"],
    links: {
      github: "https://github.com/nandinisingh16/sportX",
      demo: "https://sportx-7e9y.onrender.com/"
    }
  },
  {
    title: " House Price Prediction",
    image: project6,
    summary: [
      "Regression model using scikit-learn on cleaned housing datasets.",
      "Feature engineering, outlier removal, and cross-validation implemented.",
      "Visualized actual vs predicted prices with error analysis."
    ],
    tags: ["Machine Learning", "Regression", "scikit-learn", "Data Analysis"],
    links: {
      github: "https://github.com/nandinisingh16/house_price_predict"
    }
  }
];


const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="portfolio">


      {/* Existing Header and Projects Grid */}
      <div className="header-container">
        <img src={headerImage} alt="cover" className="cover" />
        <div className="intro">
          <h1>Portfolio</h1>
          <p>
            My public portfolio includes projects on different topics, including generative AI, NLP, computer vision and frontend web development.
            To explore more of my work -: 
            <br />
            Visit my <a href="https://github.com/nandinisingh16" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
  <h2>Raj Nandini Singh</h2>
  <p>
    I’m a final-year undergraduate student at <strong>Amity University, Noida</strong>, specializing in Artificial Intelligence & Machine Learning.
    My interests span <strong>deep learning</strong>, <strong>transformers</strong>, <strong>computer vision</strong>, <strong>web development</strong>, and <strong>DSA in C++</strong>.
    <br /><br />
    I enjoy blending creativity with computation—whether it's building responsive UIs using <strong>React</strong>, generating synthetic images using <strong>GANs</strong>, or building real-time <strong>human action recognition</strong> models using <strong>TensorFlow</strong>.
    <br /><br />
    I’m currently exploring <strong>transformer-based NLP</strong> architectures and working toward publishing my first research paper in the field of AI/ML. I’ve also developed hands-on projects like:
  </p>
  <ul>
    <li> Human Activity Recognition using CNN + LSTM</li>
    <li> Conditional GAN for age-based image generation</li>
    <li> Spend Vision AI — a voice-powered smart expense tracker</li>
    <li> sportX — a frontend app to connect local sports enthusiasts</li>
  </ul>
  <p>
    <br />
    Outside academics, I actively mentor juniors, contribute to tech communities, and enjoy playing hockey. I’m always looking for opportunities to grow, contribute, and create meaningful impact through technology.
  </p>
</div>

      {/* Skills Section */}
<SkillsTabs />

{/* Projects Section */}
    <div id="projects" className="project-grid single-project">
      <h1>Personal Projects</h1>
      <br></br>
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

  {projects[currentIndex].links.github && (
    <a 
      href={projects[currentIndex].links.github} 
      target="_blank" 
      rel="noreferrer"
    >
      GitHub
    </a>
  )}
  {projects[currentIndex].title === " sportX – Sports Enthusiast Connector" && (
  <a 
    href={projects[currentIndex].links.demo} 
    target="_blank" 
    rel="noreferrer"
  >
    Live Demo
  </a>
)}

</div>

    </div>
  </div>

  {/* Navigation fixed to the bottom */}
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
</div>



{/* Timeline Section */}
<div className="timeline-section">
  <h2 className="timeline-title">Timeline</h2>

  <div className="timeline">
    {/* Timeline Item */}
  
   <div className="timeline-container left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3> Generative AI Intern — PhotoGPT</h3>
        <p><em>Remote | May 2024 – June 2024</em></p>
        <ul>
          <li>Worked on image-based generative AI tools and workflows.</li>
          <li>Worked on experimental AI workflows.</li>
          <li>Explored prompt engineering and basic model customization.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-container right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3> Frontend Intern — Evephoria</h3>
        <p><em>Remote | April 2024 – June 2024</em></p>
        <ul>
          <li>Managed and updated the Evephoria website.</li>
          <li>Enhanced frontend components using HTML, CSS, and JS.</li>
          <li>Ensured responsive design and performance optimization.</li>
        </ul>
      </div>
    </div>

   

  </div>
</div>


<br></br>
      {/* More Projects & Links */}
{/* More Projects & Links */}
<div className="more-projects-section">
  <h2> To See More of My Projects</h2>
  <div className="link-buttons">
    <a
      href="https://github.com/nandinisingh16"
      target="_blank"
      rel="noreferrer"
      className="link-btn"
    >
       GitHub Profile
    </a>
    <a
      href="https://www.linkedin.com/in/raj-nandini-singh-618828250"
      target="_blank"
      rel="noreferrer"
      className="link-btn"
    >
       LinkedIn Profile
    </a>
  </div>
</div>



            {/* Future Projects Section */}
<FutureGoals />


    </section>
  );
};

export default Portfolio;
