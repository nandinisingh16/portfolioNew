import React from "react";

const Footer = () => (
  <footer className="footer-mf">
    <div className="footer-container">
      <p className="footer-title">
        &copy; {new Date().getFullYear()} Raj Nandini Singh. All rights reserved.
      </p>
      <p className="footer-made">
        Portfolio
      </p>
    </div>
  </footer>
);

export default Footer;