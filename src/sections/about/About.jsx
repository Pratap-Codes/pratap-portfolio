import React from 'react'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren:0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <section className='px-6 py-3 md:py-10 lg:py-20' id='about'>
      {/* Container with max-width for readability */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className='max-w-4xl mx-auto'
      >
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className='flex flex-col items-center gap-3 mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white text-center'>
            About Me
          </h2>
          {/* Decorative line */}
          <div className='h-1 w-20 bg-black dark:bg-white rounded-full'></div>
        </motion.div>

        {/* Content Section */}
        <div className='space-y-4 px-5 md:space-y-6'>
          <motion.p
            variants={itemVariants}
            className='text-base md:text-lg lg:text-xl text-black/90 dark:text-white/90 leading-relaxed text-center max-w-3xl mx-auto'
          >
            I am an aspiring full stack developer passionate about building efficient, user-friendly web applications. I enjoy learning both front-end and back-end technologies and continuously improving my skills to grow into a professional developer who can create impactful digital solutions.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='text-base md:text-lg lg:text-xl text-black/90 dark:text-white/90 leading-relaxed text-center max-w-3xl mx-auto'
          >
            Beyond coding, I find balance in nature and creativity. Hiking in the mountains brings me peace and helps me reconnect with myself, while cooking is something I truly enjoy—it allows me to relax, express creativity, and heal through the process.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default About