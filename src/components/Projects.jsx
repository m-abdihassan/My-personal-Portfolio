// src/components/Projects.js
// import React from 'react';
// import './Projects.css';

// const projects = [
  
//   {
//     title: 'E-commerce website',
//     description: 'Caloth&shoes store'
//   },
//   {
//     title: 'Project 2',
//     description: 'This is a description for project 2.'
//   },
//   {
//     title: 'Project 3',
//     description: 'This is a description for project 3.'
//   },
//   {
//     title: 'Project 4',
//     description: 'This is a description for project 3.'
//   },
//   {
//     title: 'Project 5',
//     description: 'This is a description for project 3.'
//   }
// ];

// const Projects = () => {
//   return (
    
    
//     <div className="projects-container">
            
//       {projects.map((project, index) => (
//         <div key={index} className="project-card">
//           <h3 className="project-title">{project.title}</h3>
//           <p className="project-description">{project.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;


// src/components/Projects.js
import React from 'react';
import './Projects.css';

// Sample images or icons for projects
import projectImage1 from '../assets/E-commerce.jpg';
import projectImage2 from '../assets/spareparts.jpg';
import projectImage3 from '../assets/rental.jpg';

const projects = [
  {
    title: 'E-commerce website',
    description: 'Cloth&shoes store',
    image: projectImage1
  },
  {
    title: 'Rental management system',
    description: 'Renting Houses.',
    image: projectImage2
  },
  {
    title: 'Madaale spare parts management system',
    description: 'E shop system for spareparts.',
    image: projectImage3
  }
 
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button className="project-button">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
