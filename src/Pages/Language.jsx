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
    // Frontend Skills
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
    // Backend Skills
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
    // DevOps & Hosting
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
    <section className="py-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          My Knowledge
        </h2> */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          My Knowledge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
                {skillCategory.category}
              </h3>
              <ul className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <span className="text-lg font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-lg">
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
