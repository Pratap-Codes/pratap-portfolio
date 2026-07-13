import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiHtml5,
  SiCss,
  SiHtmlacademy,
  SiMysql,
} from "react-icons/si";
import { HotelImage, GtaVI, Blog, TaskUnity } from "../assets/index.js";

export const skills = [
  { icon: FaReact, title: "React" },
  { icon: FaNodeJs, title: "Node.js" },
  { icon: SiMongodb, title: "MongoDB" },
  { icon: SiExpress, title: "Express" },
  { icon: SiTypescript, title: "TypeScript" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: FaGitAlt, title: "Git" },
  { icon: SiVite, title: "Vite" },
  { icon: SiHtml5, title: "HTML" },
  { icon: SiCss, title: "CSS" },
  { icon: FaJava, title: "Java" },
  { icon: FaPython, title: "Python" },
  { icon: FaPython, title: "Python" },
  { icon: FaFigma, title: "Figma" },
  { icon: SiMysql, title: "MySQL" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skill", label: "Skill" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    title: "Hotel Booking App",
    tagline:
      "A desktop-based booking and management solution built with core Java",
    description:
      "Built a Java Swing-based Hotel Booking Management System with JDBC and MySQL, implementing user authentication, room reservation, booking management, CRUD operations, and complete software design documentation following OOP principles.",
    techStack: ["Java", "OOP", "JDBC", "MySQL"],
    imageUrl: HotelImage,
    githubUrl: "https://github.com/Pratap-Codes/Hotel_Management_System",
    liveUrl: "",
  },
  {
    title: "MERN blog platform",
    tagline:
      "A full-stack blogging app with rich content authoring and smooth client-side routing",
    description:
      "A dynamic blog application built with React and Vite for a fast frontend experience, using React Router v6 for seamless navigation and Redux Toolkit for state management. Includes JWT authentication, blog CRUD operations, tagging, and a rich text editor for content creation.",
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    imageUrl: Blog,
    githubUrl: "https://github.com/Pratap-Codes/blog_webapp",
    liveUrl: "",
  },
  {
    title: "Task Unity",
    tagline:
      "A collaborative task management platform inspired by Trello, built for teams to plan and track work together",
    description:
      "Task Unity is a team-based task sharing and project management web application that lets users organize work into boards, lists, and cards — similar to Trello. As a group project, my main contribution was on the frontend, building the interface and user interactions, alongside serving as Schedule Manager to coordinate the team's timelines and task delegation.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "JWT",
    ],
    imageUrl: TaskUnity,
    githubUrl: "https://github.com/Pratap-Codes/TaskUnity",
    liveUrl: "",
  },
  {
    title: "GTA VI Landing Page",
    tagline:
      "A cinematic, animation-driven landing page recreating the GTA VI reveal aesthetic",
    description:
      "A visually immersive landing page inspired by the GTA VI trailer reveal, built to showcase advanced frontend animation skills. Uses GSAP for SVG mask reveals and mouse-based parallax effects to create a cinematic, game-trailer feel entirely in the browser.",
    techStack: ["React", "GSAP", "Tailwind CSS", "Vercel"],
    imageUrl: GtaVI,
    githubUrl: "https://github.com/Pratap-Codes/GTA-VI-LandingPage-React",
    liveUrl: "https://gataviplay.vercel.app/",
  },
];
