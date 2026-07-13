import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(()=> {
      setStatus("success");
      formRef.current.reset();
    })
    .catch((error) => {
      console.log(error)
      setStatus("error");
    })
  }
  return (
    <section id="contact" className="py-15">
      <div className="flex flex-col gap-3 text-black dark:text-white items-center">
        <h2 className="text-2xl text-center  font-semibold md:text-4xl lg:text-5xl">
          Contact
        </h2>
        <div className="h-1 w-20 bg-black dark:bg-white rounded-full "></div>
      </div>
      <div className="max-w-4xl mx-auto mb-15 text-black dark:text-white">
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col px-6 justify-center items-center mt-5 space-y-5">
          <h3 className="text-xl lg:text-3xl font-bold mb-4">
            Let's work together
          </h3>
          <div className="text-sm md:text-lg lg:text-xl text-center ">
            <h3>
              I’m currently open to internship opportunities and freelance
              projects.
            </h3>
            <h3>
              If you have an idea or need a developer, feel free to reach out.
            </h3>
          </div>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 md:py-4 py-2 bg-black/90 dark:bg-gray-600/60 placeholder:text-white text-white text-lg rounded-2xl shadow-lg border border-transparent focus:outline-none focus:border-3 focus:border-amber-300/80 "
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"

            required
            className="w-full px-3 md:py-4 py-2 bg-black/90 dark:bg-gray-600/60 placeholder:text-white text-white text-lg rounded-2xl shadow-lg border border-transparent focus:outline-none focus:border-3 focus:border-amber-300/80 "
            placeholder="Your email"
          />
          <textarea
            type="text"
            name="message"
            rows={5}
            required
            className="w-full h-32 px-3 md:py-4 py-2 bg-black/90 dark:bg-gray-600/60 placeholder:text-white text-white text-lg rounded-2xl shadow-lg border border-transparent focus:outline-none focus:border-3 focus:border-amber-300/80 "
            placeholder="Your Message"
          />
          <button
            className="flex items-center gap-2 p-3 md:p-4 dark:bg-gray-600 bg-black text-white rounded-2xl cursor-pointer hover:scale-102 hover:opacity-90 transition-all duration-100 ease-out"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sendingh....' : 'submit'} <IoIosSend className="text-white" />
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm">Message sent ✓ I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
