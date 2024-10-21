import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import mi from "../Images/mi.jpg";
import resume from "../Images/resume2.png";
import real from "../Images/chat3.png";
import ludo from "../Images/ludo2.avif";

const Project = () => {
  const projects = [
    {
      title: "MI Clone",
      description: "MI Clone built using React and styled-components.",
      technologies: ["React", "Styled-Components", "Netlify"],
      githubLink: "https://github.com/ShubhamSingh7777/mi_clone",
      liveDemo: "https://shubhamsingh7777.github.io/mi_clone/",
      image: mi
    },
    {
      title: "Resume Builder",
      description:
        "A mobile-friendly Resume Builder site built with Real.js and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS", "MySQL"],
      githubLink: "https://github.com/NandSingh007/resumeBuilder.git",
      liveDemo: "https://nandsingh007.github.io/resumeBuilder/",
      image: resume
    },
    {
      title: "ludo King",
      description:
        "A Ludo King platform with authentication and real-time features.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/MaxwayInfo/DamanColorSecond.git",
      liveDemo: "#",
      image: ludo
    },
    {
      title: "Real-Time Chat App",
      description: "A WhatsApp-like real-time chat app built using Socket.io.",
      technologies: ["Socket.io", "React", "Node.js"],
      githubLink: "https://github.com/NandSingh007/chatnow.git",
      liveDemo: "https://chatnow-jet.vercel.app/login",
      image: real
    }
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4" id="projects">
        {/* <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2> */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium bg-blue-100 text-blue-600 rounded-full px-2 py-1 mr-2 mb-2 dark:bg-blue-700 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
