import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import logo1 from "../assets/img/img1.png";
import logo2 from "../assets/img/img1.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      menuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleScrollToSection = (sectionId) => {
    return (e) => {
      e.preventDefault();
      
      // Close mobile menu if open
      $(".navbar-collapse").collapse("hide");
      
      // Scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: navigate to home and then scroll
        window.location.href = '/';
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
  };

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md"
        id="mainNav"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Raj Nandini Singh
          </Link>
          <button
            className={`navbar-toggler ${this.state.menuOpen ? '' : 'collapsed'}`}
            type="button"
            onClick={this.toggleMenu}
            aria-controls="navbarDefault"
            aria-expanded={this.state.menuOpen}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={`navbar-collapse ${this.state.menuOpen ? 'show' : 'collapse'} justify-content-end`}
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/project">Project</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/papers">Papers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kaggle">Kaggle</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
