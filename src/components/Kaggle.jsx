import React from "react";
import "../../src/style.css"; 

const Kaggle = () => {
  return (
    <section id="kaggle" className="kaggle-section">
      <div className="container">
        {/* Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Kaggle</h3>
                <div className="line-mf"></div>
              <p className="subtitle-a">
                I enjoy participating in Kaggle to learn, experiment with new models, and challenge myself with real-world ML problems. Below are summaries of projects and competitions I explored, often supported by GitHub repos and writeups.
              </p>
               <p className="subtitle-a">
              See more on my <a href="https://www.kaggle.com/rajnandinisingh2216" target="_blank" rel="noreferrer">Kaggle profile</a>. 
             
            </p>
            
            </div>
          </div>
        </div>

        {/* Ranks Overview */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4> Kaggle Stats</h4>
            <p>
              I actively explore competitions, datasets, and notebooks. Focused on learning, experimentation, and reproducing strong baseline solutions, here’s a snapshot of where I’ve engaged:
            </p>
            <ul>
              <li> Competitions: Beginner-level entries with active learning focus</li>
              <li> Notebooks: Several public EDA and model-building notebooks</li>
              <li> Datasets: Public use of curated datasets for analysis</li>
              <li> Discussion: Follow top solutions, contribute questions and findings</li>
            </ul>
          </div>
        </div>

        {/* Competitions Section */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4> Competitions Explored</h4>

            <h5 className="mt-3">Computer Vision</h5>
            <ul>
              <li> <strong>Cassava Leaf Disease Classification</strong> – Built a CNN model to classify leaf diseases using EfficientNet</li>
              <li> <strong>PetFinder Pawpularity Contest</strong> – Combined tabular and image data to predict pet popularity</li>
            </ul>

            <h5 className="mt-3">Natural Language Processing</h5>
            <ul>
              <li> <strong>CommonLit Readability Prize</strong> – Used BERT to predict text complexity across grade levels</li>
              <li> <strong>Jigsaw Toxic Comment Classification</strong> – Fine-tuned DistilBERT to detect toxic online comments</li>
            </ul>

          </div>
        </div>

        {/* Notebooks Section */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4> Notebooks I've Learned From</h4>
            <ul>
              <li> <strong>Leaf Disease Classifier with Transfer Learning</strong> – Used data augmentation and CNNs</li>
              <li> <strong>EDA + XGBoost on Home Credit Data</strong> – Full pipeline from cleaning to deployment-ready model</li>
              <li> <strong>Readability Prediction with RoBERTa</strong> – Replicated top solutions with custom pooling</li>
            </ul>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Kaggle;
