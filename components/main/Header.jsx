import React from "react";
import { IoNotifications} from 'react-icons/io5';


const Header = () => {
  return (
    <div className="bg-black text-white shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-purple-600">
              NEXUS
            </div>
          </div>
          
          <div className="flex items-center space-x-6 w-1/3 justify-end">
            <button className="text-gray-300 hover:text-purple-500 transition duration-300 relative">
              <IoNotifications className="h-6 w-6" />
              <span className="absolute top-0 right-0.5 h-2 w-2 bg-purple-500 rounded-full"></span>
            </button>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
