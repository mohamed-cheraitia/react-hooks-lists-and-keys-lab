import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  console.log(projects);
  const Newproject= projects.map((project,index)=>{
    return < ProjectItem name={project.name} about={project.about} technologies={project.technologies}  key={index}/>
   
     })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
     
      {Newproject}
      
      </div>
    </div>
  );
}

export default ProjectList;