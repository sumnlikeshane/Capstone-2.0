import React from 'react';
import { FaUser, FaEnvelope, FaGamepad, FaHeart, FaBookmark, FaCalendarAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useAuth } from '../../src/context/AuthContext';
import { useTheme } from '../../src/context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [favoriteGames, setFavoriteGames] = React.useState([
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      added: "2024-05-12"
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      image: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      added: "2024-05-10"
    },
    {
      id: 3,
      name: "Elden Ring",
      image: "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg",
      added: "2024-05-08"
    }
  ]);

  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-16 text-center">
          <FaUser className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-800 dark:text-white">
            Please log in to view your profile
          </h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 py-8 text-gray-800 dark:text-white">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
              <FaUser className="h-16 w-16 text-gray-500 dark:text-gray-300" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {user.displayName || 'User'}
              </h2>
              <div className="flex items-center justify-center md:justify-start text-white text-opacity-80">
                <FaEnvelope className="mr-2" />
                <span>{user.email}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center ml-3 border-2 border-gray-300 dark:border-gray-800 rounded-full bg-white dark:bg-gray-800">
              <input
                type="checkbox"
                className="light-switch sr-only"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                id="profile-light-switch"
              />
              <label htmlFor="profile-light-switch" className="relative cursor-pointer p-2">
                <FaSun className={`text-indigo-500 dark:hidden`} />
                <FaMoon className={`text-purple-500 dark:block hidden`} />
                <span className="sr-only">Switch to light/dark mode</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-100 dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                <FaGamepad className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-indigo-600 dark:text-purple-400">Games Played</h3>
            <p className="mt-2 text-3xl font-bold">12</p>
          </div>
          
          <div className="bg-zinc-100 dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                <FaHeart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-indigo-600 dark:text-purple-400">Favorites</h3>
            <p className="mt-2 text-3xl font-bold">3</p>
          </div>
          
          <div className="bg-zinc-100 dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                <FaBookmark className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-indigo-600 dark:text-purple-400">Wishlist</h3>
            <p className="mt-2 text-3xl font-bold">7</p>
          </div>
        </div>
        
        <div className="bg-zinc-100 dark:bg-gray-900 rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-purple-400 mb-6">My Favorite Games</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favoriteGames.map(game => (
              <div 
                key={game.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer shadow-lg"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-purple-400 mb-2">
                    {game.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span>Added: {game.added}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;