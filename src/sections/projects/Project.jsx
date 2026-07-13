import React, { useState } from 'react'
import { projects } from '../../data/data'
import ProjectCard from '../../Components/ui/ProjectCard'
import ProjectModal from '../../Components/ui/ProjectModal'

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className='w-full px-6 py-3 md:py-10 lg:py-20' id='project'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center gap-3 mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white'>Project</h2>
          <div className='h-1 w-20 bg-black dark:bg-white rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              tagline={project.tagline}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onReadMore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

export default Project