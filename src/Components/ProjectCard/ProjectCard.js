import React from 'react'

function ProjectCard({projectName, src}) {
  return (
    <div className='cardContainer'>
    <img className='project-image' src={src} alt={projectName}></img>
    <h3>{projectName}</h3>
    </div>
  )
}

export default ProjectCard