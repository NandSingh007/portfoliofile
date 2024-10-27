import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDigitalOcean
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiHostinger
} from "react-icons/si";

const Language = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-500" />,
          level: "Expert"
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-blue-500" />,
          level: "Expert"
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          level: "Advanced"
        },
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-500" />,
          level: "Advanced"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          level: "Intermediate"
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
          level: "Advanced"
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-900" />,
          level: "Advanced"
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500" />,
          level: "Intermediate"
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-700" />,
          level: "Intermediate"
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500" />,
          level: "Advanced"
        }
      ]
    },
    {
      category: "DevOps & Hosting",
      items: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600" />,
          level: "Advanced"
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-black" />,
          level: "Advanced"
        },
        {
          name: "AWS",
          icon: <FaAws className="text-yellow-600" />,
          level: "Intermediate"
        },
        {
          name: "Digital Ocean",
          icon: <FaDigitalOcean className="text-blue-500" />,
          level: "Intermediate"
        },
        {
          name: "Hostinger",
          icon: <SiHostinger className="text-purple-700" />,
          level: "Intermediate"
        }
      ]
    }
  ];

  return (
    <section className="py-10 text-gray-800 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200">
      <div className="container px-4 mx-auto md:px-8 lg:px-16">
        <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          My Knowledge
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="p-6 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="px-4 py-2 mb-6 text-3xl font-semibold text-center text-transparent transition duration-300 ease-in-out transform rounded-full shadow-md md:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-600 hover:scale-110">
                {skillCategory.category}
              </h3>
              <ul className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between p-3 transition-all duration-300 transform rounded-md shadow-md bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-600 dark:hover:from-blue-900 dark:hover:to-blue-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl transition-transform duration-500 transform hover:rotate-12">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {skill.name}
                      </span>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-300">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Language;
