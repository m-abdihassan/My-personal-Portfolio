// import { Link } from 'react-router-dom';
// import './Nav.css'; // Add CSS styling for navigation

// const Nav = () => (
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/projects">Projects</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//       <li><a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a></li>
//     </ul>
//   </nav>
// );

// export default Nav;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Nav.css'; // Add CSS styling for navigation

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="nav">
//       <div className="nav-container">
//         {/* X Icon for mobile view */}
//         <button className="nav-toggle" onClick={toggleMenu}>
//           {isMenuOpen ? 'X' : '☰'} {/* ☰ is a hamburger icon */}
//         </button>

//         <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//           <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
//           <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
//           <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
//           <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
