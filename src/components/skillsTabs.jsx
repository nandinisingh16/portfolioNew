import React, { useState } from 'react';

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState("ai");

  const tabs = [
    { id: "ai", label: " AI/ML" },
    { id: "frontend", label: " Frontend" },
    { id: "backend", label: " Backend" },
    { id: "languages", label: " Programming" },
    { id: "soft", label: " Soft Skills" }
  ];

  const tabContent = {
    ai: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">Machine Learning & Artificial Intelligence</h3>
        <p className="text-sm text-gray-200 leading-6">
          I'm deeply passionate about the field of AI/ML. My work spans across <strong>deep learning</strong>, 
          <strong> natural language processing</strong>, and <strong>computer vision</strong>. 
          I’ve built projects like <strong>Human Action Recognition</strong> using CNN+LSTM, 
          <strong> Spend Vision AI</strong> which interprets expense voice commands using NLP, and, <strong>Image Generation with Conditional GANs</strong>. 
          I’m currently focused on <strong>transformers</strong> and preparing to publish my first research paper.
        </p>
      </div>
    ),
    frontend: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">Frontend Development</h3>
        <p className="text-sm text-gray-200 leading-6">
          With a strong design sense and frontend logic, I build engaging and accessible interfaces using 
          <strong> React.js</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, 
          <strong> HTML5</strong>, and <strong>CSS3</strong>. My project <strong>SportX</strong> is a 
          responsive, user-friendly web platform that connects sports enthusiasts based on location and time.
        </p>
      </div>
    ),
   backend: (
  <div>
    <h3 className="text-lg font-semibold text-teal-300 mb-2">Backend & Systems</h3>
    <p className="text-sm text-gray-200 leading-6">
      I'm currently exploring the backend ecosystem with foundational knowledge in 
      <strong>SQL</strong>, <strong>MongoDB</strong>, and a working understanding of <strong>Node.js</strong>. I've also begun working with <strong>Linux</strong> environments, 
      understanding system-level operations and command-line workflows. While backend isn't my primary focus, 
      these skills support my development in full-stack projects and AI systems where server-side logic and data handling matter.
    </p>
  </div>
),

    languages: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">Programming Languages & Tools</h3>
        <p className="text-sm text-gray-200 leading-6">
          I regularly practice <strong>Data Structures & Algorithms in C++</strong> (LeetCode), 
          and build AI/ML models in <strong>Python</strong>. For frontend development, I use 
          <strong> JavaScript</strong>. I'm proficient with <strong>Git & GitHub</strong>, 
          and I primarily work in <strong>VS Code</strong> and Jupyter Notebooks.
        </p>
      </div>
    ),
    soft: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">Soft Skills & Collaboration</h3>
        <p className="text-sm text-gray-200 leading-6">
          I’m a collaborative and quick-learning individual who thrives in team environments. 
          As a <strong>peer mentor</strong> and <strong>club member</strong>, I’ve helped juniors navigate 
          coding, web dev, and AI topics. I believe strong communication and initiative 
          are key to impactful learning and leadership.
        </p>
      </div>
    ),
  };

  return (
    <div className="skills-section">
      <h2>🛠️ Skills</h2>
      <div className="skills-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`skills-tab-btn ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="skills-tab-content">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default SkillsTabs;
