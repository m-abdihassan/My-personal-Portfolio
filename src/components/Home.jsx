import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import './Home.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';




const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: -70,
      duration: 50,
    });
    // Do not set isMenuOpen to false here, so menu remains open
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">X</span>
          ) : (
            <span className="hamburger-icon">&#9776;</span>
          )}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollTo('home')}>Home</a></li>
          <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
          <li><a onClick={() => scrollTo('about')}>About</a></li>
          <li><a onClick={() => scrollTo('contact')}>Contact</a></li>     
              
          
        </ul>
      </nav>

      <section id="home" className="home-section">
      <Header />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
        
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="Footer">
     
       <Footer/>
      </section>
     
     
    </div>
  );
};

export default Home;
