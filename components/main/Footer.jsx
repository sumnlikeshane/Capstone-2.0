import React from "react";
import { 
  IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, 
  IoLogoDiscord, IoLogoLinkedin 
} from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-purple-600">NEXUS</h3>
            <p className="mb-4 text-sm text-gray-500">
            Your one-stop website to find out about the latest games. Stay updated on upcoming releases, reviews, and gaming news. Discover new titles, hidden gems, and get expert recommendations tailored just for you!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-500 dark:hover:text-purple-400"><IoLogoFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 dark:hover:text-purple-400"><IoLogoTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 dark:hover:text-purple-400"><IoLogoInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 dark:hover:text-purple-400"><IoLogoDiscord className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 dark:hover:text-purple-400"><IoLogoLinkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-500 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500  hover:text-indigo-500 transition duration-300 dark:hover:text-purple-400">News</a></li>
              <li><a href="#" className="text-gray-500  hover:text-indigo-500 transition duration-300 dark:hover:text-purple-400">Reviews</a></li>
              <li><a href="#" className="text-gray-500  hover:text-indigo-500 transition duration-300 dark:hover:text-purple-400">Tournaments</a></li>
              <li><a href="#" className="text-gray-500  hover:text-indigo-500 transition duration-300 dark:hover:text-purple-400">Community</a></li>
              <li><a href="#" className="text-gray-500  hover:text-indigo-500 transition duration-300 dark:hover:text-purple-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-500 dark:text-gray-200">Join Our Community</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Stay updated with the latest games and exclusive offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-100 dark:bg-gray-800 text-gray-400 dark:text-gray-100 px-4 py-2 w-full rounded-l outline-none border-2 border-zinc-100 dark:border-gray-800 focus:border-indigo-600 dark:focus:border-purple-600"
              />
              <button className="bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white px-4 py-2 rounded-r transition duration-300">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; 2025 NEXUS Gaming. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
