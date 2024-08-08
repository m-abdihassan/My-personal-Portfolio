// src/components/About.js
import React from 'react';
import './About.css';
import placeholderImage from '../assets/profile.jpeg'; // Adjust the path as needed

const skills = [
  'Html & css',
  'Java & Javascript',
  'React js & Spring boot',
  'git & github'
  
  // Add more skills as needed
];

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <img src={placeholderImage} alt="Profile" className="profile-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          Hello! I’m Mohaemd Abdieid, a passionate software developer with 2 years of experience in full-stack development. I specialize in backend systems with Spring Boot and PostgreSQL, as well as frontend development using React.js and Vite. My work focuses on creating efficient, scalable solutions and user-friendly interfaces. I’m committed to delivering high-quality solutions that meet clients' needs and drive their success.


          </p>
        </div>
      </div>

      <section className="about-skills">
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default About;
