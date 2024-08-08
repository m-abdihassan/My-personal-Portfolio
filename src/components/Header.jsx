import React from 'react';
import './Header.css';
import profileImage from '../assets/profile.jpeg'; // Replace with your image path
import resumepdf from '../assets/CvMohamedupdated (3).pdf'; // Replace with your image path


const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="text-section">
          <h1>Hi, <br /> I'm <span className="highlight">Mohamed Abdieid</span></h1>
          <p>Full_stack developer</p>
          <a href={resumepdf} download className="resume-button">
            Resume
          </a>

          <a href="https://github.com/m-abdihassan" target="_blank" rel="noopener noreferrer" className="resume-button">
            Github
          </a>
        </div>
        <div className="image-section">
          <div className="image-wrapper">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
