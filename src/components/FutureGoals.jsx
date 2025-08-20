import React, { useState } from 'react';
import '../../src/style.css';
const FutureGoals = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const goals = [
    {
      title: 'Contribute to Open Source Projects',
      details: [
        'Identify AI/Web-related open-source communities on GitHub.',
        'Contribute to beginner-friendly issues and documentations.',
        'Engage with collaborative codebases and PR workflows.'
      ]
    },
    {
      title: 'Enhance Spend Vision AI',
      details: [
        'Improve the Smart Expense Tracker by integrating NLP for expense extraction.',
        'Train models to identify anomalies and provide intelligent summaries.',
        'Add support for receipt OCR, budgeting visualizations, and forecasting.'
      ]
    },
    {
      title: 'Research on Agentic AI Systems',
      details: [
        'Explore multi-agent frameworks and autonomous decision-making.',
        'Work on creating prototype agents with reasoning and chaining.',
        'Possibly convert this into a research paper or project demo.'
      ]
    },
    {
      title: 'Learn DevOps Basics',
      details: [
        'Understand Docker containerization and image creation.',
        'Learn Kubernetes basics and service orchestration.',
        'Apply these in small-scale ML or frontend deployments.'
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="future-section">
      <h2>Future Work & Goals</h2>
      <div className="future-list">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`future-item${expandedIndex === index ? ' expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="future-header">
              <span className="bullet"></span>
              <p>{goal.title}</p>
            </div>
            {expandedIndex === index && (
              <ul className="goal-details">
                {goal.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureGoals;
