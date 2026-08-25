import React from 'react'
import {motion} from "motion/react"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <motion.div
    onClick={toggleTheme}
    whileTap={{scale:0.90, rotate:20}} 
    whileHover={{scale:1.1}}
    transition={{duration:0.2}}
    aria-label='Toggle theme'
    className='fixed bottom-6 right-6 p-3 z-50 rounded-full bg-gray-300 dark:bg-[#1a1a1a] text-black dark:text-white shadow-lg border border-white/10 cursor-pointer'
    >
      {theme === "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20}/> }
    </motion.div>
  )
}

export default ThemeToggle
