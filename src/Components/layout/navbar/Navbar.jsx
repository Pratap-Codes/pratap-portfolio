import React, { useState, useEffect } from "react";
import useScrollDirection from "../../../hooks/useScrollDirection";
import useActiveSection from "../../../hooks/ActiveSection";
import { navLinks } from "../../../data/data";
import { SiCoggle } from "react-icons/si";
import { easeInOut, easeOut, motion, stagger } from "motion/react";
import { useLoading } from "../../../context/LoadingContext";

const Navbar = () => {
  const {loading} = useLoading();
  const scrollDirection = useScrollDirection();
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0,
      },
    },
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: -15, filter: "blur(1px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
    animate={{
      y:scrollDirection === "down" ? "-100%" : "0%",
    }}
    transition={{
      duration:0.3,
      ease:easeInOut
    }}
    className="w-full flex justify-center fixed top-0 left-0 z-50 bg-[#f8f9fa] dark:bg-[#0b0b0a] shadow-xl dark:shadow-none">
      <motion.nav
        initial={{
          opacity: 0,
          y: -70,
          filter: "blur(4px)",
        }}
        animate={
          loading ? {opacity:0, y:-70, filter:"blur(4px)"} :
          {opacity: 1,
          y: 0,
          filter: "blur(0px)",}
        }
        transition={{
          duration: 0.3,
          ease: easeOut,
        }}
        className={`w-full md:w-11/12 max-w-7xl flex p-3 justify-between items-center text-black dark:text-white border-b  border-white/50 md:border-b-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="text-[16px] md:text-xl lg:text-2xl font-semibold">
          <span>Pratap Code</span>
        </div>
        {/* Desktop links */}
        <motion.div
          variants={navContainerVariants}
          initial="hidden"
          animate={loading ? "hidden" : "visible"}
          className="hidden md:flex md:px-4 md:py-3   dark:bg-[#1a1a1a]/30 backdrop-blur-lg rounded-3xl  items-center gap-12 text-[16px] font-semibold border border-black/40 dark:border-white/10"
        >
          {navLinks.map((link) => (
            <motion.a
              variants={navItemVariants}
              key={link.label}
              href={link.href}
              className={`hover:text-gray-500 dark:hover:text-gray-300/80 transition relative group ${
                activeSection === link.href.slice(1)
                  ? "text-black dark:text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bg-black dark:bg-white -bottom-1 left-0  h-0.5 scale-x-0 origin-left w-full transition-all ease-linear duration-300 group-hover:scale-x-100 ${
                  activeSection === link.href.slice(1)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } `}
              ></span>
            </motion.a>
          ))}
        </motion.div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              console.log("Hello");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }
            }}
            className="px-2 py-1 mt-1 text-sm hover:scale-105 lg:px-3 md:py-2 bg-black dark:bg-gray-200/90 rounded-xl text-white dark:text-black text-[15px] font-semibold cursor-pointer border border-transparent md:hover:scale-108 hover:opacity-90 hover:border-white transition-all duration-300"
          >
            Let's talk
          </button>
        </div>
      </motion.nav>

      {/* Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#d8f3dc] dark:bg-[rgb(10,10,10)] backdrop-blur-lg text-black dark:text-white z-50
        transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button
            aria-label="Close menu"
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* CENTERED NAV LINKS */}
        <div className="flex flex-col items-center justify-center h-[80%] gap-8 text-2xl font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-gray-400 transition ${
                activeSection === link.href.slice(1)
                  ? "text-black dark:text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
