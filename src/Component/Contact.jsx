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
    <section className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div
        className="container mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10"
        id="contact"
      >
        {/* <h2 className="text-5xl font-serif text-center mb-10 drop-shadow-md">
          Connect with Me
        </h2> */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          Connect with Me
        </h2>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center mb-10 space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhone className="text-3xl text-green-600" />
            <p className="text-lg">9653984956</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-3xl text-red-600" />
            <a
              href="mailto:your.email@example.com"
              className="text-lg underline text-gray-700 dark:text-gray-300"
            >
              shubham.srathore07@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-3xl text-blue-700" />
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline text-blue-700"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* Portfolio */}
          <div className="flex items-center space-x-3">
            <FaLink className="text-3xl text-gray-700 dark:text-gray-300" />
            <a
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline text-gray-700 dark:text-gray-300"
            >
              My Portfolio
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-12 mt-10">
          <a
            href="linkedin.com/in/shubham-singh-79a715219"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-5xl text-blue-700" />
          </a>
          <a
            href="https://github.com/NandSingh007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-5xl text-gray-900 dark:text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-5xl text-pink-600" />
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        h2 {
          font-family: "Georgia", serif;
        }
        .fab {
          transition: color 0.3s ease;
        }
        .fab:hover {
          color: #f0c040;
        }
      `}</style>
    </section>
  );
};

export default Contact;
