import React, { useState } from "react";
import { Photo } from "../../index";
import {
  RiArrowDownLine,
  RiLinkedinBoxLine,
  RiInstagramFill,
  RiGithubFill,
  RiDownloadLine,
} from "@remixicon/react";
import {motion} from "motion/react"
import { useLoading } from "../../context/LoadingContext";

  const ContainerVariants = {
    hidden:{},
    visible:{
      transition:{
        staggerChildren: 0.06,
        delayChildren:0.1,
      }
    }
  }
  const ItemVariants = {
    hidden:{opacity:0, y:30, filter: "blur(4px)"},
    visible:{
      opacity:1,
      y:0,
      filter:"blur(0px)",
      transition: {duration:0.3, ease: "easeOut"}
    },
  };
const Hero = () => {
  const {loading} = useLoading()
  const [loaded, setLoaded] = useState(false);


  return (
    <section
      className="flex flex-col items-center  pt-25 md:pt-25"
      id="home"
    >
      <motion.div 
      variants={ContainerVariants}
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      className=" flex flex-col items-center">
        <motion.div 
        variants={ItemVariants}
        className="w-25 h-25 md:w-40 md:h-40 rounded-full border-4 border-black/50 dark:border-white shadow-lg overflow-hidden transition-all duration-200 hover:scale-105 cursor-pointer">
          <img
            src={Photo.Photo}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            alt="profile"
            className={`h-full w-full object-cover transition-opacity duration-1000 
          ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </motion.div>
        {/* Line div */}
        <motion.div 
        variants={ItemVariants}
        className="w-45 h-1 bg-black dark:bg-white mt-5 rounded md:w-70"></motion.div>
        <div className="flex flex-col items-center mt-8 space-y-2 text-center ">
          <motion.h3 
          variants={ItemVariants}
          className="text-black dark:text-white text-xl font-semibold md:text-2xl">
            Hi, I'm Pratap,
          </motion.h3>
          <motion.h1 
          variants={ItemVariants}
          className="text-xl text-black dark:text-white font-semibold md:text-4xl">
            a{" "}
            <span className="font-extrabold text-2xl md:text-[40px]">
              Jr.Fullstack Developer.
            </span>
          </motion.h1>
          <motion.div
          variants={ItemVariants}
           
           className="flex justify-around gap-6 mt-10">
            <button className="flex gap-2 px-2 py-2 border-2 border-black dark:border-white text-black dark:text-white text-[16px] font-mono rounded-xl hover:scale-105 cursor-pointer hover:bg-gray-300/20 hover:opacity-100 transition-all duration-300 opacity-70 shadow-lg">
              Download resume <RiArrowDownLine className="w-5" />{" "}
            </button>
          </motion.div>
          <motion.div
          variants={ItemVariants}
          
           className="mt-10">
            <p className="text-black dark:text-white text-[16px] font-semibold text-center">
              Find me on
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/pratap-yadav-219397300/"
                className="bg-gray-400/40 p-2 rounded-full text-black dark:text-white hover:scale-110 transition-all duration-300 hover:bg-gray-400/65"
              >
                <RiLinkedinBoxLine />
              </a>
              <a
                href="https://github.com/Pratap-Codes"
                className="bg-gray-400/40 p-2 rounded-full text-black dark:text-white hover:scale-110 transition-all duration-300 hover:bg-gray-400/65"
              >
                <RiGithubFill />
              </a>
              <a
                href="https://www.instagram.com/sugam_20/"
                className="bg-gray-400/40 p-2 rounded-full text-black dark:text-white hover:scale-110 transition-all duration-300 hover:bg-gray-400/65"
              >
                <RiInstagramFill />
              </a>
            </div>
          </motion.div>
          {/* Line between home and about */}
          <div className="h-10 w-1  text-black dark:text-white mt-14 rounded"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
