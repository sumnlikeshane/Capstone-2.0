import React from "react";
import { 
  IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, 
  IoLogoDiscord, IoLogoLinkedin 
} from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-500">NEXUS</h3>
            <p className="mb-4 text-sm text-gray-400">
              Your ultimate destination for gaming and entertainment. 
              Discover new worlds, connect with players, and elevate your gaming experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500"><IoLogoFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><IoLogoTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><IoLogoInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><IoLogoDiscord className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><IoLogoLinkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Join Our Community</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest games and exclusive offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 text-gray-100 px-4 py-2 w-full rounded-l outline-none border border-gray-800 focus:border-purple-600"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r transition duration-300">
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
