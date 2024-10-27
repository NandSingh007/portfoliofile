import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import logo from "../Images/subhlogo.png";
import openSound from "../Images/open.mp3";
import closeSound from "../Images/open.mp3";
function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Toggle menu items with sound effect
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const sound = new Audio(isMenuOpen ? closeSound : openSound);
    sound.play();
  };

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md dark:bg-gray-900 font-poppins">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
        <img src={logo} alt="Logo" className="h-12 w-18" />
      </div>

      {/* Centered Menu Items for Desktop */}
      <div className="hidden mx-auto space-x-6 text-lg font-semibold md:flex">
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 transform -translate-y-2"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-2"
        >
          <div className="flex space-x-6">
            {["About", "Experience", "Projects", "Contact", "Education"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-800 transition-all duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </Transition>
      </div>

      {/* Right Side: Dark Mode and Toggle Button */}
      <div className="flex items-center space-x-6">
        {/* Dark/Light mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="transition-all duration-300 transform focus:outline-none hover:scale-110"
        >
          {darkMode ? (
            <FaSun className="text-2xl text-yellow-400" />
          ) : (
            <FaMoon className="text-2xl text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Dashboard Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-800 focus:outline-none dark:text-gray-200"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile View Sidebar for Menu Items */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div
          className={`absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 z-[100000] ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          {["About", "Experience", "Projects", "Contact", "Education"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-lg font-semibold text-gray-800 transition-all duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item}
              </a>
            )
          )}
        </div>
      </Transition>
    </header>
  );
}

export default Header;
