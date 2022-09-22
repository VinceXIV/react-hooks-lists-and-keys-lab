import React from "react";
import {v4 as uuid } from 'uuid'

function ProjectItem({ name, about, technologies }) {

  const jsxTechnologies = technologies.map(technology => {
    return <span key={uuid()}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {jsxTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
