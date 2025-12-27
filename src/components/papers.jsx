import React from "react";
import "../../src/style.css";

const Papers = () => {
  return (
    <section id="research" className="kaggle-section">
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Research & Publications</h3>
              <p className="subtitle-a">
                This page highlights my research contributions and academic
                interests in <strong>Agentic AI</strong>,{" "}
                <strong>Retrieval-Augmented Generation (RAG)</strong>, and{" "}
                <strong>Multimodal Learning</strong>, with a focus on building
                scalable and autonomous AI systems.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        {/* ================= PUBLICATIONS ================= */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Publications & Accepted Papers</h4>

            <div className="publication-box">
              <h5>
                Autonomous Agentic AI Pipeline for Efficient Data Preprocessing
              </h5>
              <p>
                <strong>Raj Nandini Singh</strong>
                <br />
                <em>
                  International Conference on Computational Techniques in Data
                  Science (ICTDS 2025)
                </em>
                <br />
                December 19, 2025 · Chandigarh, India
              </p>

              <ul>
                <li><strong>Track:</strong> Artificial Intelligence</li>
                <li><strong>Paper ID:</strong> 56</li>
                <li><strong>Status:</strong> Accepted (Camera-Ready Submitted)</li>
              </ul>

              <p>
                <strong>Abstract:</strong> This paper proposes an autonomous
                agent-based AI pipeline for automated data ingestion, cleaning,
                validation, and feature preparation. The system significantly
                reduces manual preprocessing effort while improving
                reproducibility and reliability across machine learning
                workflows.
              </p>

              <a
                href="https://chandigarh.nmims.edu/iictds-2025/"
                target="_blank"
                rel="noreferrer"
              >
                Conference Website
              </a>
            </div>
          </div>
        </div>

        {/* ================= RESEARCH INTERESTS ================= */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Research Interests</h4>
            <ul>
              <li>Agentic AI & Autonomous Systems</li>
              <li>Data-Centric AI and Automated ML Pipelines</li>
              <li>Retrieval-Augmented Generation (RAG)</li>
              <li>Multimodal Learning (Vision + Language)</li>
              <li>Model Evaluation, Reliability & Responsible AI</li>
            </ul>
          </div>
        </div>

        {/* ================= PAPERS STUDIED ================= */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Influential Papers I’ve Studied</h4>

<p><strong>2025</strong></p>
            <ul>
              <li>
                <em>AutoML-Zero: Evolving Machine Learning Algorithms from Scratch</em> — Google Research
                <br />
                Explores automated discovery of learning algorithms, laying groundwork for agent-driven and self-improving ML systems.

              </li> <li><em>Recent research on agent-based AutoML pipelines (surveyed in 2025 preprints)</em> 
               — 2025
               <br />Presents agent-based frameworks for automating data preprocessing, model selection, and hyperparameter optimization in end-to-end ML workflows.  </li>
            </ul>
            <p><strong>2024</strong></p>
            <ul>
              <li>
                <em>Scaling Laws for Neural Language Models</em> — OpenAI
                <br />
                Study on how model performance scales with data, parameters, and
                compute.
              </li> <li><em>Attention Is All You Need</em> 
               — Vaswani et al.
               <br />
The foundational Transformer paper that introduced self-attention, enabling parallelization and revolutionizing modern NLP models.
              </li>
            </ul>

            <p><strong>2023</strong></p>
            <ul>
              <li>
                <em>
                  Retrieval-Augmented Generation for Knowledge-Intensive NLP
                  Tasks
                </em>{" "}
                — Lewis et al.
                <br />
                Foundational work on improving LLM factuality using retrieval.
              </li>
              <li>
                <em>Segment Anything</em> — Meta AI
                <br />
                A general-purpose foundation model for image segmentation.
              </li>
            </ul>

            <p><strong>2022</strong></p>
            <ul>
              <li>
                <em>Diffusion Models Beat GANs on Image Synthesis</em> — Dhariwal
                & Nichol
                <br />
                Comparative study of diffusion models and GANs.
              </li>
            </ul>
          </div>
        </div>

        {/* ================= RESEARCH HABITS ================= */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Research Trends & Reading Habits</h4>
            <p>
              I actively track emerging research in generative AI,
              interpretability, and responsible AI. I regularly read preprints
              from{" "}
              <a
                href="https://arxiv.org"
                target="_blank"
                rel="noreferrer"
              >
                arXiv
              </a>{" "}
              and papers published at NeurIPS, ICML, ACL, CVPR, and AAAI.
            </p>
          </div>
        </div>

        {/* ================= CONFERENCES ================= */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Journals & Conferences I Follow</h4>
            <ul>
              <li>Neural Information Processing Systems (NeurIPS)</li>
              <li>Conference on Computer Vision and Pattern Recognition (CVPR)</li>
              <li>International Conference on Learning Representations (ICLR)</li>
              <li>Association for Computational Linguistics (ACL)</li>
              <li>Journal of Machine Learning Research (JMLR)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Papers;
