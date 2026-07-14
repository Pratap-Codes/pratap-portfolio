import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsArrowUpRight } from "react-icons/bs";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  const { title, description, keyFeatures = [], techStack = [], imageUrl, githubUrl, liveUrl } = project

  return (
    <div 
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
      onClick={onClose}
    >
      <div 
        className='max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl
                   bg-gradient-to-br from-zinc-900 via-zinc-950 to-indigo-950/10
                   border border-neutral-800 p-6'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-2xl font-bold text-white'>{title}</h3>
          <button 
            onClick={onClose}
            className='text-neutral-400 hover:text-white text-2xl leading-none'
          >
            &times;
          </button>
        </div>

        <img src={imageUrl} alt={title} className='rounded-lg w-full h-90 object-cover mb-4' />

        <p className='text-neutral-300 leading-relaxed mb-5'>{description}</p>

        {keyFeatures.length > 0 && (
          <div className='mb-5'>
            <h4 className='text-white font-semibold mb-2'>Key features</h4>
            <ul className='list-disc list-inside space-y-1 text-neutral-400 text-sm'>
              {keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {techStack.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-6'>
            {techStack.map((tech, i) => (
              <span 
                key={i} 
                className='text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300'
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className='flex gap-3'>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target='_blank' 
              rel='noopener noreferrer'
              className='px-3 py-2 rounded-lg border border-neutral-700 text-white text-sm
                         hover:bg-neutral-800 transition-colors'
            >
              <FaGithub />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target='_blank' 
              rel='noopener noreferrer'
              className='px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm
                         hover:bg-indigo-500 transition-colors flex gap-2 items-center justify-center'
            >
            live <BsArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal