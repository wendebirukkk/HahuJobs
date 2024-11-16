import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon } from '@fortawesome/free-solid-svg-icons';
import Body from './Body';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false); // When at top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#F1F1F1] text-black'} min-h-screen`}>
      <div
        className={`w-full p-4 sticky top-0 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-transparent backdrop-blur-lg text-black' // Transparent background with blur effect when scrolled
            : 'bg-[#F1F1F1] text-black' // Regular color without shadow when at top
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Restored HaHuJobs logo/text on the left */}
          <div>
            <h2 className="text-xl font-semibold">HaHuJobs</h2>
          </div>

          {/* Hamburger Menu Icon for Medium and Below */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>

          {/* Navigation Menu */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-6 md:items-center space-y-2 md:space-y-0 mt-4 md:mt-0`}
          >
            <h2
              className={`text-lg hover:text-[#009688] cursor-pointer ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              Home
            </h2>
            <h2
              className={`text-lg hover:text-[#009688] cursor-pointer ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              About
            </h2>
            <h2
              className={`text-lg hover:text-[#009688] cursor-pointer ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              Jobs
            </h2>
            <h2
              className={`text-lg hover:text-[#009688] cursor-pointer ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              Post Vacancy
            </h2>
            <h2
              className={`text-lg hover:text-[#009688] cursor-pointer ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              Contact
            </h2>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`text-lg ${isScrolled ? 'text-black' : 'text-black'}`}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>

            {/* Buttons for Login and Sign Up */}
            <div className="flex space-x-4 mt-2 md:mt-0">
              <button className="text-xs px-4 bg-[#009688] hover:bg-[#80CBC4] text-white rounded">Login</button>
              <span
                className={`${
                  isScrolled ? 'text-black' : 'text-black'
                }`}
              >
                or
              </span>
              <button className="px-3 bg-[#009688] hover:bg-[#80CBC4] text-white rounded">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
};

export default Header;
