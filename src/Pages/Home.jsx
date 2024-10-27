import React from "react";
import img from "../Images/3333.jpeg";
import ofc from "../Images/ofc.jpeg";
import ofc5 from "../Images/ofc5.jpg";
import img1 from "../Images/pr.png";
import "./Home.css";
import { FaUser } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pdf from "../Images/SubhResume.pdf";
import Header from "../Component/Header";
import {
  FaLaptopCode,
  FaJs,
  FaReact,
  FaServer,
  FaDatabase
} from "react-icons/fa"; // Add this line to import the icons
import Project from "./Project";
import Certificate from "./Certificate";

import Contact from "../Component/Contact";
import Language from "./Language";

const Home = () => {
  return (
    <>
      <Header />

      <section className="relative flex flex-col items-center justify-center min-h-screen p-10 overflow-hidden md:flex-row bg-gradient-to-r from-blue-200 to-purple-300 dark:from-gray-800 dark:to-gray-900">
        {/* Background Pulsing Animation */}
        <div className="absolute inset-0 transform scale-150 bg-blue-400 rounded-full opacity-40 animate-pulse-slow" />

        {/* Animated Ring Around Image */}
        <div className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 animate-spin-slow opacity-30 blur-xl" />

        {/* Left Side - Profile Image with Hover Effect */}
        <div className="relative flex items-center justify-center w-full mb-6 md:mb-0 md:w-1/2">
          <img
            src={img1}
            alt="User"
            className="relative object-cover transition-transform duration-500 ease-in-out transform rounded-full shadow-lg w-80 h-80 md:w-96 md:h-96 hover:scale-110 animate-fade-in"
          />
        </div>

        {/* Right Side - Text and Buttons */}
        <div className="flex flex-col items-center w-full space-y-6 text-center md:items-start md:text-left md:w-1/2 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 transition-transform duration-500 ease-out transform dark:text-white hover:scale-105">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Shubham Singh</span>
          </h1>
          <p className="text-lg text-gray-800 md:text-2xl dark:text-gray-300">
            I am a{" "}
            <span className="font-semibold text-gradient">
              MERN Stack Developer
            </span>
            .
          </p>

          {/* Buttons with Glow and Shadow */}
          <div className="flex flex-col mt-6 space-y-4 md:flex-row md:space-y-0 md:space-x-4 animate-slide-in">
            <a
              href="#contact"
              className="px-8 py-3 text-white transition-all duration-300 ease-in-out transform bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 hover:shadow-2xl"
            >
              Contact Info
            </a>
            <a
              href={pdf}
              download
              className="px-8 py-3 text-white transition-all duration-300 ease-in-out transform bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 hover:scale-105 hover:shadow-2xl"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex mt-8 space-x-6 animate-fade-in">
            <a
              href="https://linkedin.com/in/shubham-singh-79a715219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-700 transition-all duration-300 ease-in-out transform dark:text-gray-300 hover:text-blue-600 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NandSingh007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-700 transition-all duration-300 ease-in-out transform dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-10 font-sans md:flex-row bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        {/* Left Side - Unique Shape Image */}
        <div className="relative flex items-center justify-center w-full mb-6 md:mb-0 md:w-1/2">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Background Circle for Unique Shape */}
            <div className="absolute z-0 bg-gray-300 rounded-full w-96 h-96 opacity-20 -bottom-20 -left-20 animate-pulse"></div>
            <img
              src={img}
              alt="User"
              className="z-10 object-cover w-full h-full transition-transform duration-500 ease-in-out transform rounded-lg shadow-lg hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - About Me Content */}
        <div
          className="flex flex-col items-center w-full space-y-6 text-center md:items-start md:text-left md:w-1/2"
          id="about"
        >
          <h2 className="flex items-center justify-center mb-12 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-8-5a5 5 0 00-4.5 2.57A7 7 0 009 11h2a7 7 0 015.5-5.57A5 5 0 0010 3zm1 8H9v4a1 1 0 001 1h2a1 1 0 001-1v-4z"
                clipRule="evenodd"
              />
            </svg>
            About Me
          </h2>

          {/* About Me Introduction */}
          <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I'm <span className="font-semibold">Shubham Singh</span>, a
            passionate web developer with expertise in MERN stack and a strong
            foundation in JavaScript. I have over 2 years of experience in
            building dynamic, user-friendly web applications.
          </p>

          {/* Technical Skills */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <ul className="space-y-3 text-lg text-gray-700 list-none dark:text-gray-300">
              <li className="flex items-center">
                <FaLaptopCode className="mr-2 text-blue-500" />
                <span className="font-semibold">MERN Stack Developer</span>{" "}
                (MongoDB, Express.js, React.js, Node.js)
              </li>
              <li className="flex items-center">
                <FaJs className="mr-2 text-yellow-500" />
                <span className="font-semibold">Core language:</span> JavaScript
                (ES6+)
              </li>
              <li className="flex items-center">
                <FaReact className="mr-2 text-cyan-500" />
                <span className="font-semibold">Familiar with:</span> Next.js
                for server-side rendering and building SEO-friendly websites
              </li>
              <li className="flex items-center">
                <FaServer className="mr-2 text-green-500" />
                <span className="font-semibold">Backend expertise:</span>{" "}
                Node.js and Express.js
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2 text-purple-500" />
                <span className="font-semibold">Database management:</span>{" "}
                MongoDB and MySQL
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-300">
            My goal is to create intuitive, scalable, and high-performance web
            applications that enhance user experiences and drive business
            outcomes.
          </p>
        </div>
      </section>
      <section
        className="relative py-40 text-gray-800 bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Optional Overlay */}
        <div
          className="container relative z-10 p-10 mx-auto bg-white rounded-lg shadow-lg"
          id="education"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} // Light background for inner div
        >
          <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
            My Education Journey
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Educational Cards */}
            {[
              {
                title: "10th Grade",
                board: "Rajasthan Board of Secondary Education",
                year: 2015,
                percentage: "81%",
                icon: "fa-user-graduate"
              },
              {
                title: "12th Grade",
                board: "Rajasthan Board of Secondary Education",
                year: 2017,
                percentage: "80% in PCM",
                icon: "fa-user-graduate"
              },
              {
                title: "Bachelor's Degree in B.Tech (Civil)",
                year: 2021,
                percentage: "71%",
                icon: "fa-university"
              },
              {
                title: "Master's Degree in M.Sc. (Computer Science)",
                year: 2024,
                percentage: "75%",
                icon: "fa-graduation-cap"
              }
            ].map((education, index) => (
              <div
                key={index}
                className="relative p-6 transition-transform transform bg-white rounded-lg shadow-md w-80 hover:scale-105 hover:shadow-xl animate-fade-in"
              >
                <div className="flex justify-center mb-4">
                  <i
                    className={`text-6xl text-blue-600 transition-transform transform fas ${education.icon} hover:rotate-12`}
                  ></i>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-center text-gray-800">
                  {education.title}
                </h3>
                {education.board && (
                  <p className="text-lg font-semibold text-center text-gray-800">
                    Board:{" "}
                    <span className="font-normal text-gray-600">
                      {education.board}
                    </span>
                  </p>
                )}
                <p className="text-lg font-semibold text-center text-gray-800">
                  Passout Year:{" "}
                  <span className="font-normal text-gray-600">
                    {education.year}
                  </span>
                </p>
                <p className="text-lg font-semibold text-center text-gray-800">
                  Percentage:{" "}
                  <span className="font-normal text-gray-600">
                    {education.percentage}
                  </span>
                </p>
                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
              </div>
            ))}
          </div>
        </div>
        {/* CSS Styles for Animation and Design */}
        <style jsx>{`
          @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

          h2 {
            font-family: "Georgia", serif;
          }

          .animate-fade-in {
            animation: fadeIn 0.5s forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <section
        className="relative py-20 text-gray-800 dark:text-gray-200"
        style={{
          backgroundImage: "url('/path/to/your/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 opacity-70"></div>

        <div
          className="container relative p-10 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-900 bg-opacity-95"
          id="experience"
        >
          <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
            My Work Experience
          </h2>

          <div className="flex flex-col items-stretch justify-center gap-10 md:flex-row">
            {/* AlmaBetter Experience */}
            <div
              className="relative flex-1 p-8 transition duration-300 border-4 border-blue-500 rounded-lg shadow-lg bg-gradient-to-br from-indigo-200 via-blue-100 to-teal-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:border-indigo-500"
              style={{
                minHeight: "420px",
                backgroundImage: `url(${ofc5})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <img
                src={img1}
                alt="Your second profile"
                className="absolute w-16 h-16 border-4 border-white rounded-full top-6 left-6"
              />
              <div className="relative z-10 p-6 mt-24 text-black bg-white rounded-lg dark:text-white dark:bg-black bg-opacity-80">
                <h3 className="mb-4 font-serif text-3xl font-bold transition-all duration-300 hover:text-blue-500 hover:underline">
                  Full Stack Developer Training at AlmaBetter
                </h3>
                <p className="mb-2 text-lg transition-all duration-300 hover:text-blue-500">
                  Duration: Jan 2022 - Dec 2023
                </p>
                <p className="text-lg transition-all duration-300 hover:text-blue-500">
                  Responsibilities: Comprehensive full-stack development
                  training, working with MERN stack projects, and building
                  responsive applications.
                </p>
              </div>
            </div>

            {/* Maxway Infotech Experience */}
            <div
              className="relative flex-1 p-8 transition duration-300 border-4 border-blue-500 rounded-lg shadow-lg bg-gradient-to-br from-green-200 via-teal-100 to-yellow-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:border-indigo-500"
              style={{
                minHeight: "420px",
                backgroundImage: `url(${ofc})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <img
                src={img1}
                alt="Your portrait"
                className="absolute w-16 h-16 border-4 border-white rounded-full top-6 left-6"
              />
              <div className="relative z-10 p-6 mt-24 text-black bg-white rounded-lg dark:text-white dark:bg-black bg-opacity-80">
                <h3 className="mb-4 font-serif text-3xl font-bold transition-all duration-300 hover:text-blue-500 hover:underline">
                  Full Stack Developer at Maxway Infotech Pvt. Ltd.
                </h3>
                <p className="mb-2 text-lg transition-all duration-300 hover:text-blue-500">
                  Duration: May 2023 - Present
                </p>
                <p className="text-lg transition-all duration-300 hover:text-blue-500">
                  Responsibilities: Developing end-to-end full-stack web
                  applications, maintaining client projects, and collaborating
                  with teams to deliver optimized solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* </div> */}
      <Project />
      <Language />
      <Certificate />
      <Contact />
    </>
  );
};

export default Home;
