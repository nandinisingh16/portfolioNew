import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

//import css in order
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/img/icons/css/ionicons.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'lightbox2/dist/js/lightbox.min.js';

//import components
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Preloader from './components/preloader';
import Blog from './components/blog.jsx'; 
import Papers from './components/papers.jsx';
import Kaggle from './components/Kaggle.jsx';
import Footer from './components/footer.jsx';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Portfolio />
            <Papers />
            <Kaggle />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/kaggle" element={<Kaggle />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
