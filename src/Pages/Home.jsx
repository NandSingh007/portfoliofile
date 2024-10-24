import React from "react";
import img from "../Images/3333.jpeg";
import ofc from "../Images/ofc.jpeg";
import ofc5 from "../Images/ofc5.jpg";
import img1 from "../Images/pr.png";
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

      {/* First Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 p-10">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center w-full mb-6 md:mb-0 md:w-1/2">
          <img
            src={img1}
            alt="User"
            className="rounded-full shadow-lg w-96 h-96 md:w-112 md:h-112 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right Side - Text and Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-500">Shubham Singh</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            I am a{" "}
            <span className="font-semibold text-purple-600">
              MERN Stack Developer
            </span>
            .
          </p>

          {/* Buttons for Contact Info and Download CV */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Contact Info
            </a>
            <a
              href={pdf}
              download
              className="px-8 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 ease-in-out"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8">
            <a
              href="linkedin.com/in/shubham-singh-79a715219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-4xl transition-all duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NandSingh007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-4xl transition-all duration-300 ease-in-out"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-10 font-sans">
        {/* Left Side - Unique Shape Image */}
        <div className="flex justify-center items-center w-full mb-6 md:mb-0 relative md:w-1/2">
          <div className="relative w-80 h-80 md:w-146 md:h-110">
            {/* Background Circle for Unique Shape */}
            <div className="w-96 h-96 rounded-full bg-gray-300 opacity-20 absolute -bottom-20 -left-20 z-0"></div>
            <img
              src={img}
              alt="User"
              className="rounded-lg shadow-lg w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out z-10"
            />
          </div>
        </div>

        {/* Right Side - About Me Content */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6"
          id="about"
        >
          {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white font-serif">
            About Me
          </h1> */}
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-8-5a5 5 0 00-4.5 2.57A7 7 0 019 11h2a7 7 0 015.5-5.57A5 5 0 0010 3zm1 8H9v4a1 1 0 001 1h2a1 1 0 001-1v-4z"
                clipRule="evenodd"
              />
            </svg>
            About Me
          </h2>

          {/* About Me Introduction */}
          <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
            Hi, I'm <span className="font-semibold">Shubham Singh</span>, a
            passionate web developer with expertise in MERN stack and a strong
            foundation in JavaScript. I have over 2 years of experience in
            building dynamic, user-friendly web applications.
          </p>

          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-center">
                <FaLaptopCode className="mr-2 text-blue-500" />
                MERN Stack Developer (MongoDB, Express.js, React.js, Node.js)
              </li>
              <li className="flex items-center">
                <FaJs className="mr-2 text-yellow-500" />
                Core language: JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <FaReact className="mr-2 text-cyan-500" />
                Familiar with Next.js for server-side rendering and building
                SEO-friendly websites
              </li>
              <li className="flex items-center">
                <FaServer className="mr-2 text-green-500" />
                Backend expertise in Node.js and Express.js
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2 text-purple-500" />
                Database management using MongoDB and MySQL
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
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
          backgroundAttachment: "fixed" // Keep the background fixed during scroll
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional Overlay */}
        <div
          className="container mx-auto bg-white bg-opacity-80 rounded-lg p-10 relative z-10"
          id="education"
        >
          {/* <h2 className="text-5xl font-serif text-center mb-10 drop-shadow-md">
            My Education Journey
          </h2> */}
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
            My Education Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1st Box */}
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-110 hover:shadow-2xl animate-fade-in">
              <div className="flex justify-center mb-4">
                <i className="fas fa-user-graduate text-6xl text-blue-600 transition-transform transform hover:rotate-12"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">10th Grade</h3>
              <p className="text-gray-800 text-lg font-semibold">
                Board:{" "}
                <span className="font-normal text-gray-600">
                  Rajasthan Board of Secondary Education
                </span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Passout Year:{" "}
                <span className="font-normal text-gray-600">2015</span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Percentage:{" "}
                <span className="font-normal text-gray-600">81%</span>
              </p>
            </div>

            {/* 2nd Box */}
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-110 hover:shadow-2xl animate-fade-in">
              <div className="flex justify-center mb-4">
                <i className="fas fa-user-graduate text-6xl text-blue-600 transition-transform transform hover:rotate-12"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">12th Grade</h3>

              <p className="text-gray-800 text-lg font-semibold">
                Board:{" "}
                <span className="font-normal text-gray-600">
                  Rajasthan Board of Secondary Education
                </span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Passout Year:{" "}
                <span className="font-normal text-gray-600">2017</span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Percentage in PCM:{" "}
                <span className="font-normal text-gray-600">80%</span>
              </p>
            </div>

            {/* 3rd Box */}
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-110 hover:shadow-2xl animate-fade-in">
              <div className="flex justify-center mb-4">
                <i className="fas fa-university text-5xl text-blue-600 transition-transform transform hover:rotate-12"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Bachelor's Degree in B.Tech (Civil)
              </h3>
              <p className="text-gray-800 text-lg font-semibold">
                Passout Year:{" "}
                <span className="font-normal text-gray-600">2021</span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Percentage
                <span className="font-normal text-gray-600">71%</span>
              </p>
              {/* <p className="text-gray-600">Percentage: 71%</p> */}
            </div>

            {/* 4th Box */}
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-110 hover:shadow-2xl animate-fade-in">
              <div className="flex justify-center mb-4">
                <i className="fas fa-graduation-cap text-5xl text-blue-600 transition-transform transform hover:rotate-12"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Master's Degree in M.Sc. (Computer Science)
              </h3>
              <p className="text-gray-800 text-lg font-semibold">
                Passout Year:{" "}
                <span className="font-normal text-gray-600">2024</span>
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Percentage
                <span className="font-normal text-gray-600">75%</span>
              </p>
            </div>
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

          .hover\\:scale-110:hover {
            transform: scale(1.1);
          }

          .hover\\:shadow-2xl:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </section>

      <section
        className="relative py-20 text-gray-800 dark:text-gray-200"
        style={{
          backgroundImage: "url('/path/to/your/background-image.jpg')", // Adjust the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Light overlay to soften the background image */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-60"></div>

        <div
          className="container relative mx-auto bg-yellow-100 dark:bg-yellow-700 bg-opacity-90 rounded-lg p-10 shadow-lg"
          id="experience"
        >
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
            My Work Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AlmaBetter Experience */}
            <div
              className="relative bg-gray-800 bg-opacity-60 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{
                minHeight: "400px", // Using minHeight instead of fixed height
                backgroundImage: `url(${ofc5})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Profile Image */}
              <img
                src={img1}
                alt="Your second profile"
                className="absolute top-6 left-6 w-20 h-20 rounded-full border-4 border-white"
              />

              <div className="relative z-10 text-white mt-32 p-6 bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Full Stack Developer Training at AlmaBetter
                </h3>
                <p className="text-lg mb-2">Duration: Jan 2022 - Dec 2023</p>
                <p className="text-lg">
                  Responsibilities: Comprehensive full-stack development
                  training, working with MERN stack projects, and building
                  responsive applications.
                </p>
              </div>
            </div>

            {/* Maxway Infotech Experience */}
            <div
              className="relative bg-gray-800 bg-opacity-60 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{
                minHeight: "400px", // Using minHeight instead of fixed height
                backgroundImage: `url(${ofc})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Profile Image */}

              <img
                src={img1}
                alt="Your portrait"
                className="absolute top-6 left-6 w-20 h-20 rounded-full border-4 border-white"
              />

              <div className="relative z-10 text-white mt-32 p-6 bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Full Stack Developer at Maxway Infotech Pvt. Ltd.
                </h3>
                <p className="text-lg mb-2">Duration: May 2023 - Present</p>
                <p className="text-lg">
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
