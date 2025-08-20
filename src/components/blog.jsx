import React from "react";
import "../../src/style.css";
const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a" style={{ color: "#343a40" }} >
                In my blog, I write about Machine Learning, AI, and Web Development.
                Posts include tutorials, insights from competitions, and lessons learned
                during real-world projects. All opinions shared here are my own.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        {/* Popular Posts */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Popular posts</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>Medical Content Creation in the Age of Generative AI</strong><br />
                <span>Automated content generation and revision with LLMs</span><br />
                <small>Jul 3, 2024 · 2 min read</small>
              </li>
              <li className="mb-3">
                <strong>RAG with User Interaction</strong><br />
                <span>Improve LLM responses in RAG use cases by interacting with the user</span><br />
                <small>Nov 13, 2023 · 1 min read</small>
              </li>
              <li className="mb-3">
                <strong>Gradient Accumulation in PyTorch</strong><br />
                <span>Increasing batch size to overcome memory constraints</span><br />
                <small>Feb 19, 2021 · 4 min read</small>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="row mt-4">
          <div className="col-sm-12">
            <h4>Recent posts</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>Medical Content Creation in the Age of Generative AI</strong><br />
                <span>Automated content generation and revision with LLMs</span><br />
                <small>Jul 3, 2024 · 2 min read</small>
              </li>
              <li className="mb-3">
                <strong>RAG with User Interaction</strong><br />
                <span>Improve LLM responses in RAG use cases by interacting with the user</span><br />
                <small>Nov 13, 2023 · 1 min read</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
