import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const ContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const ItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-15">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-black dark:text-white flex flex-col items-center"
        variants={ContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          variants={ItemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center"
        >
          Contact
        </motion.h2>

        <motion.div
          variants={ItemVariants}
          className="h-1 w-20 bg-black dark:bg-white rounded-full mt-3 mb-10"
        />

        {/* Text */}
        <motion.h3
          variants={ItemVariants}
          className="text-xl lg:text-3xl font-bold mb-4 text-center"
        >
          Let's work together
        </motion.h3>

        <motion.p
          variants={ItemVariants}
          className="text-center text-sm md:text-lg lg:text-xl"
        >
          I'm currently open to internship opportunities and freelance
          projects.
        </motion.p>

        <motion.p
          variants={ItemVariants}
          className="text-center text-sm md:text-lg lg:text-xl mb-8"
        >
          If you have an idea or need a developer, feel free to reach out.
        </motion.p>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={ContainerVariants}
          className="w-full flex flex-col gap-5"
        >
          <motion.input
            variants={ItemVariants}
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-2xl bg-black/90 dark:bg-gray-600/60 text-white placeholder:text-white border border-transparent focus:border-amber-300 focus:outline-none"
          />

          <motion.input
            variants={ItemVariants}
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-2xl bg-black/90 dark:bg-gray-600/60 text-white placeholder:text-white border border-transparent focus:border-amber-300 focus:outline-none"
          />

          <motion.textarea
            variants={ItemVariants}
            rows={5}
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-2xl bg-black/90 dark:bg-gray-600/60 text-white placeholder:text-white border border-transparent focus:border-amber-300 focus:outline-none"
          />

          <motion.button
            variants={ItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "sending"}
            className="flex mx-auto px-5 items-center justify-center gap-2 rounded-2xl bg-black dark:bg-gray-600 text-white py-4 cursor-pointer"
          >
            {status === "sending" ? "Sending..." : "Submit"}
            <IoIosSend />
          </motion.button>

          {status === "success" && (
            <motion.p
              variants={ItemVariants}
              className="text-green-500 text-center"
            >
              ✓ Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              variants={ItemVariants}
              className="text-red-500 text-center"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;