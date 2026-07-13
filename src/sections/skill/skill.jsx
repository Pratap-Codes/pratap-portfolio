import React from "react";
import { SkillCard, skills } from "../../index";
import {motion} from "motion/react"

const ContainerVariants = {
  hidden:{},
  visible:{
    transition:{
      staggerChildren:0.2,
      delayChildren:0.15,
    }
  }
}
const ItemVariants = {
  hidden:{opacity:0, y:30, filter: "blur(6px)"},
  visible:{
    opacity:1,
    y:0,
    filter:"blur(0px)",
    transition: { duration: 0.7, ease: 'easeOut' },

  }
}
const Skill = () => {
  
  return (
    <section id="skill" className="py-14">
      <motion.div 
      variants={ContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.2}}
      className="max-w-4xl mx-auto mb-15">
        <motion.div 
        variants={ItemVariants}
        className="flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white  text-center">
            Skills
          </h2>

          <motion.div 
        variants={ItemVariants}
          
          className="h-1 w-20 bg-black dark:bg-white rounded-full "></motion.div>
          <motion.div
        variants={ItemVariants}
          
           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mt-4  ">
            {skills.map((skill, index) => {
              const Icon = skill.icon; 

              return (
                <SkillCard
                  key={index}
                  icon={Icon}
                  title={skill.title}
                  level={skill.level}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skill;