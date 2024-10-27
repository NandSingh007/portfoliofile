import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLink
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="relative py-12 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-200"
      id="contact"
    >
      <div className="container p-10 px-4 mx-auto bg-white rounded-lg shadow-xl lg:px-8 dark:bg-gray-800">
        <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          Connect with Me
        </h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2">
          {/* Phone */}
          <div className="flex items-center p-6 space-x-4 text-white transition-transform transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-400 hover:scale-105">
            <FaPhone className="text-4xl" />
            <p className="text-lg">9653984956</p>
          </div>

          {/* Email */}
          <div className="flex items-center p-6 space-x-4 text-white transition-transform transform rounded-lg shadow-md bg-gradient-to-r from-red-500 to-red-400 hover:scale-105">
            <FaEnvelope className="text-4xl" />
            <a
              href="mailto:shubham.srathore07@gmail.com"
              className="text-lg underline"
            >
              shubham.srathore07@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center p-6 space-x-4 text-white transition-transform transform rounded-lg shadow-md bg-gradient-to-r from-blue-700 to-blue-600 hover:scale-105">
            <FaLinkedin className="text-4xl" />
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* Portfolio */}
          <div className="flex items-center p-6 space-x-4 text-white transition-transform transform rounded-lg shadow-md bg-gradient-to-r from-gray-600 to-gray-500 hover:scale-105">
            <FaLink className="text-4xl" />
            <a
              href="https://portfoliofile.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline"
            >
              My Portfolio
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-10 space-x-10">
          <a
            href="https://linkedin.com/in/shubham-singh-79a715219"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-5xl text-blue-700 transition-colors duration-300 hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/NandSingh007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-5xl text-gray-900 transition-colors duration-300 dark:text-white hover:text-gray-700" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-5xl text-pink-600 transition-colors duration-300 hover:text-pink-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
