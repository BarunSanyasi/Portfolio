import React from 'react'
import "./Project.css";
import ProjectCards from '../Cards/ProjectCards';
import { projects } from '../Data/Datas';

const Project = () => {
  return (
      <div id='projects' className='Project-container-box'>
        <h1>Projects</h1>
        <p>I have worked on a wide range of projects. Here are some of my projects.</p>
        <div className="skill-container">
          {projects.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
        </div>
      </div>
  );
};

export default Project;