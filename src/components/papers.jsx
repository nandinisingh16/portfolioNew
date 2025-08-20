import React from "react";
import "../../src/style.css";
const Papers = () => {
  return (
    <section id="research" className="kaggle-section">
      <div className="container">
        {/* Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Research</h3>
              <p className="subtitle-a">
                This page summarizes impactful research Papers I’ve read and admired across the fields of AI, Machine Learning, and Data Science. These works have shaped my learning and project ideas.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="row mt-3">
          <div className="col-sm-12">
            <h5>This page overviews research I follow and admire:</h5>
            <ul>
              <li> Selected academic Paperss that inspired me</li>
              <li> Interesting research trends and citations</li>
              <li> Conferences and journals I actively follow</li>
            </ul>
          </div>
        </div>

        {/* Publications Section */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4> Notable Research Paperss I've Read</h4>

            <p><strong>2024</strong></p>
            <ul>
              <li>
                <em>“Scaling Laws for Neural Language Models”</em> – OpenAI, 2024<br />
                Insightful exploration of how model performance scales with data, parameters, and compute.
              </li>
            </ul>

            <p><strong>2023</strong></p>
            <ul>
              <li>
                <em>“Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”</em> – Lewis et al., 2023<br />
                Key reading on improving LLM performance through retrieval-based augmentation (RAG).
              </li>
              <li>
                <em>“Segment Anything”</em> – Meta AI, 2023<br />
                A foundation model for image segmentation that generalizes to unseen tasks.
              </li>
            </ul>

            <p><strong>2022</strong></p>
            <ul>
              <li>
                <em>“Attention Is All You Need”</em> – Vaswani et al., 2017 (revisited in 2022)<br />
                The original Transformer Papers — foundational to modern NLP.
              </li>
              <li>
                <em>“Diffusion Models Beat GANs on Image Synthesis”</em> – Dhariwal & Nichol, 2022<br />
                Study comparing generative modeling techniques. Deep dive into diffusion models.
              </li>
            </ul>
          </div>
        </div>

        {/* Citation Stats (placeholder or optional) */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Citation Trends & Research Interests</h4>
            <p>
              I enjoy tracking Paperss with emerging citations in generative AI, interpretability, and responsible AI.
              I regularly read preprints from <a href="https://arxiv.org" target="_blank" rel="noreferrer">arXiv</a> and Paperss published at NeurIPS, ICML, ACL, CVPR, and AAAI.
            </p>
          </div>
        </div>

        {/* Reviews (you follow, not write for) */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4> Journals & Conferences I Follow</h4>
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
