import React from "react";
import img3 from "../Images/ct1.png";
import ctr from "../Images/crt2.jpeg";

const Certificate = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto bg-white dark:bg-gray-800 bg-opacity-80 rounded-lg p-10 shadow-xl">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificate 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:rotate-1 hover:scale-105">
            <img
              src={img3}
              alt="Certificate 1"
              className="w-full h-full max-h-[500px] rounded-lg object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex justify-center items-center rounded-lg">
              <h3 className="text-3xl text-white font-bold transform scale-0 group-hover:scale-100 transition-transform duration-700">
                Full Stack Web Developer
              </h3>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:rotate-1 hover:scale-105">
            <img
              src={ctr}
              alt="Certificate 2"
              className="w-full h-full max-h-[500px] rounded-lg object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex justify-center items-center rounded-lg">
              <h3 className="text-3xl text-white font-bold transform scale-0 group-hover:scale-100 transition-transform duration-700">
                React Specialization
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
