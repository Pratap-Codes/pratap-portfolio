import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="w-full h-px bg-black dark:bg-white mt-5 rounded shadow-2xl"></div> 
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center text-black dark:text-white mt-5 gap-1 text-[14px] font-normal">
        <span>Pratap Yadav</span>
        <div className="flex items-center gap-1"> <FaRegCopyright/> 2026 All Rights Reserved  </div>
      </div>
      </div>
      
    </section>
  );
};

export default Footer;
