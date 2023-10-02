import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);
  const Newtech= technologies.map((tech,index)=>{
return <span key={index}>{tech}</span>

  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
      {Newtech}
      </div>
    </div>
  );
}

export default ProjectItem;