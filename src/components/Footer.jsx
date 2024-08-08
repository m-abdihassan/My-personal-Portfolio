
// const Footer = () => (
//   <footer>
//     <p>&copy; 2024 My Portfolio</p>

//   </footer>
// );

// export default Footer;
// src/components/Footer.js
// import React from 'react';
// import './Footer.css';

// // Sample icons (use your actual icons or images)
// import facebookIcon from '../assets/profile.jpeg';
// import twitterIcon from '../assets/profile.jpeg';
// import linkedinIcon from '../assets/profile.jpeg';

// const Footer = () => (
//   <footer className="footer">
//     <p>&copy; 2024 My Portfolio</p>
//     <div className="footer-contact">
//       <p>Call me: <a href="tel:+1615534181">615-534-181</a></p>
//     </div>
//     <div className="footer-social">
//       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//         <img src={facebookIcon} alt="Facebook" />
//       </a>
//       <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//         <img src={twitterIcon} alt="Twitter" />
//       </a>
//       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//         <img src={linkedinIcon} alt="LinkedIn" />
//       </a>
//     </div>
//   </footer>
// );

// export default Footer;
import React from 'react';
import './Footer.css';

// Sample icons (use your actual icons or images)
import facebookIcon from '../assets/iconfb.png';
import tiktokIcon from '../assets/tik.png';
import githubIcon from '../assets/git.jpg';

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 My Portfolio</p>
    <div className="footer-contact">
      <p>Call me: <a href="tel:+1615534181">615-534-181</a></p>
    </div>
    <div className="footer-social">
      <a href="https://www.facebook.com/Amiircabdiciid1211" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.tiktok.com/@m.abdieid" target="_blank" rel="noopener noreferrer">
        <img src={tiktokIcon} alt="TikTok" />
      </a>
      <a href="https://github.com/m-abdihassan" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  </footer>
);

export default Footer;
