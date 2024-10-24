import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import logo from "../Images/subhlogo.png";
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 font-poppins shadow-md">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
        <img src={logo} alt="Logo" className="h-13 w-24" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg">
        {["About", "Experience", "Projects", "Contact", "Education"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-105"
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Right side: Dark/Light mode toggle and Mobile Menu */}
      <div className="flex items-center space-x-6">
        {/* Dark/Light mode toggle icon */}
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none transform transition-all duration-300 hover:scale-110"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-2xl" />
          ) : (
            <FaMoon className="text-gray-600 dark:text-gray-300 text-2xl" />
          )}
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-2xl text-gray-800 dark:text-gray-200"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <nav className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 md:hidden flex flex-col items-center space-y-6 py-6">
          {["About", "Experience", "Projects", "Contact", "Education"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-105"
                onClick={toggleMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </Transition>
    </header>
  );
}

export default Header;
