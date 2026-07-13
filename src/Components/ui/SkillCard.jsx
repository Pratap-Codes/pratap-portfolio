import React from 'react'

const SkillCard = ({ icon: Icon, title }) => {
  return (
   <div className="p-4 bg-linear-to-r from-[#f8edeb]/15 to-[#ffffff] dark:from-[#434343]/15 dark:to-[#000000] text-black dark:text-white rounded-xl flex flex-col items-center gap-2 border border-white/20 shadow-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl  hover:opacity-90">
      <Icon size={30} />   
      <h3>{title}</h3>
    </div>
  )
}

export default SkillCard
