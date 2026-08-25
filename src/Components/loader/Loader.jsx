import {
  motion,
  AnimatePresence,
  easeOut,
  easeInOut,
} from "motion/react";
import React, { useState, useEffect } from "react";
import { MdOpacity } from "react-icons/md";

const NAME = "PRATAP";

const Loader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (isLoading) {
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      html.style.overflow = 'auto'
      body.style.overflow = 'auto'
    }

    return () => {
      html.style.overflow = 'auto'
      body.style.overflow = 'auto'
    }
  }, [isLoading])
  return (
    <AnimatePresence onExitComplete={onComplete}>
    {isLoading && (
      <div className="fixed inset-0 z-100 flex">
        <motion.div
          className="w-full h-screen bg-black flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.5,
            ease: easeOut,
          }}
        >
          <NameReveal />
        </motion.div>
      </div>
    )}
      
    </AnimatePresence>
  );
};
const NameReveal = () => {
  const letters = NAME.split("");
  return (
    <div className="flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.15,
            ease: easeInOut,
          }}
          exit={{
            opacity:0,
            transition:{duration:0.15},
          }}
          className="text-5xl md:text-7xl font-bold text-white inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default Loader;
