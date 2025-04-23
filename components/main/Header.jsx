import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoNotifications } from 'react-icons/io5';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('dark-mode', true);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', false);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="text-gray-800 dark:text-white border-b border-gray-400 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-purple-600">
              NEXUS
            </div>
          </div>

          <div className="flex items-center space-x-6 w-1/3 justify-end">
            <div className="flex flex-col justify-center ml-3 border-2 border-gray-300 dark:border-gray-800 rounded-full">
              <input
                type="checkbox"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={handleToggle}
                id="light-switch"
              />
              <label htmlFor="light-switch" className="relative cursor-pointer p-2">
                <FaSun className={`text-indigo-500 dark:hidden`} />
                <FaMoon className={`text-purple-500 dark:block hidden`} />
                <span className="sr-only">Switch to light/dark mode</span>
              </label>
            </div>

            <button className="text-gray-600 hover:text-indigo-500 dark:hover:text-purple-500 transition duration-300 relative">
              <IoNotifications className="h-6 w-6" />
              <span className="absolute top-0 right-0.5 h-2 w-2 bg-indigo-500 dark:bg-purple-500 rounded-full"></span>
            </button>

            <button
              onClick={handleLoginClick}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
