import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { useAuth } from "../../src/context/AuthContext"; 
import { useTheme } from "../../src/context/ThemeContext";

const Header = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="text-gray-800 dark:text-white border-b border-gray-400 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-purple-600 cursor-pointer" onClick={() => navigate("/")}>
              NEXUS
            </div>
          </div>

          <div className="flex items-center space-x-6 w-1/3 justify-end">

            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-2 py-2 rounded-full text-sm transition flex items-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={()=> navigate("/profile")}
                  className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-2 py-2 rounded-full text-sm transition"
                >
                  <FaUser className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={()=> navigate("/login")}
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 transform hover:scale-105"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
