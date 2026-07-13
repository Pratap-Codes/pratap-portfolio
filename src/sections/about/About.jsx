import React from 'react'

const About = () => {
  return (
    <section className='px-6 py-3 md:py-10 lg:py-20' id='about'>
      {/* Container with max-width for readability */}
      <div className='max-w-4xl mx-auto'>
        
        {/* Header Section */}
        <div className='flex flex-col items-center gap-3 mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white text-center'>
            About Me
          </h2>
          {/* Decorative line */}
          <div className='h-1 w-20 bg-black dark:bg-white rounded-full'></div>
        </div>

        {/* Content Section */}
        <div className='space-y-4 px-5 md:space-y-6'>
          <p className='text-base md:text-lg lg:text-xl text-black/90 dark:text-white/90 leading-relaxed text-center max-w-3xl mx-auto'>
            I am an aspiring full stack developer passionate about building efficient, user-friendly web applications. I enjoy learning both front-end and back-end technologies and continuously improving my skills to grow into a professional developer who can create impactful digital solutions.
          </p>

          <p className='text-base md:text-lg lg:text-xl text-black/90 dark:text-white/90 leading-relaxed text-center max-w-3xl mx-auto'>
            Beyond coding, I find balance in nature and creativity. Hiking in the mountains brings me peace and helps me reconnect with myself, while cooking is something I truly enjoy—it allows me to relax, express creativity, and heal through the process.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About