import React, { useState } from "react";

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState("analysis");

  const tabs = [
    { id: "analysis", label: " Data Analysis & Statistics" },
    { id: "ml", label: " Machine Learning" },
    { id: "data", label: " Data Processing & SQL" },
    { id: "programming", label: " Programming & Tools" },
    { id: "viz", label: " Visualization & Reporting" },
    { id: "dl", label: " Deep Learning (Applied)" }
  ];

  const tabContent = {
    analysis: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Data Analysis & Statistics
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Exploratory Data Analysis (EDA), Feature Engineering, Hypothesis Testing,
          A/B Testing, Correlation Analysis, Model Evaluation Metrics
        </p>
      </div>
    ),

    ml: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Machine Learning
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Regression & Classification, Tree-Based Models (XGBoost, LightGBM),
          Scikit-learn Pipelines, Cross-Validation, Hyperparameter Tuning,
          NLP (TF-IDF, Text Classification)
        </p>
      </div>
    ),

    data: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Data Processing & SQL
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Pandas, NumPy, Data Cleaning, Data Transformation,
          SQL (Joins, CTEs, Window Functions), Dataset Validation
        </p>
      </div>
    ),

    programming: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Programming & Tools
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Python, SQL, Git & GitHub, Linux/Bash,
          Streamlit, FastAPI, Jupyter Notebooks
        </p>
      </div>
    ),

    viz: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Visualization & Reporting
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Matplotlib, Seaborn, Power BI,
          Dashboarding, Data Storytelling, Stakeholder Reporting
        </p>
      </div>
    ),

    dl: (
      <div>
        <h3 className="text-lg font-semibold text-teal-300 mb-2">
          Deep Learning (Applied)
        </h3>
        <p className="text-sm text-gray-200 leading-6">
          Neural Networks, CNNs, LSTMs,
          Transformer Basics, Computer Vision (OpenCV),
          Practical Deep Learning for Real-World Use Cases
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
            className={`skills-tab-btn ${
              activeTab === tab.id ? "active" : ""
            }`}
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
