import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("projects: ", projects);

  const jsxProjects = projects.map(project => {
    return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{jsxProjects}</div>
    </div>
  );
}

export default ProjectList;
