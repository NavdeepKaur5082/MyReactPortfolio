import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { title: "Colors Of Rajasthan", description: "A travel website for Rajasthan tourism." },
    { title: "Kids World", description: "An Android app with learning activities for kids." },
    { title: "To-Do Application", description: "A simple task management web app." },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;