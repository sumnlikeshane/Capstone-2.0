import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaTimes, FaGamepad, FaStar, FaCalendarAlt } from "react-icons/fa";
import LoadingSkeleton from "./LoadingSkeleton";
import parse from 'html-react-parser';

const GameGrid = ({ searchQuery = "" }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const API_KEY = "a583e68ec25f4f22b4a2f37e82ca128b";

  const fetchGames = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      );
      const data = await res.json();
      setGames(data.results);
      setTotalPages(data.pagination?.pages || 10);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchGameDetails = async (gameId) => {
    setLoadingDetails(true);
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      );
      const data = await res.json();
      setGameDetails(data);
      setLoadingDetails(false);
    } catch (error) {
      setLoadingDetails(false);
    }
  };

  useEffect(() => {
    fetchGames(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (selectedGame) {
      document.body.style.overflow = "hidden";
      fetchGameDetails(selectedGame);
    } else {
      document.body.style.overflow = "auto";
      setGameDetails(null);
    }
  }, [selectedGame]);

  const handleCardClick = (gameId) => {
    setSelectedGame(gameId);
  };

  const closePopup = () => {
    setSelectedGame(null);
  };

  const filteredGames = searchQuery.trim() === "" 
    ? games 
    : games.filter(game =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen px-6 py-8 text-white">
      {filteredGames.length === 0 ? (
        <div className="text-center text-gray-700 dark:text-gray-300 py-12 text-xl font-semibold">
          No games found for your search.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-zinc-100 dark:bg-gray-900 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer shadow-lg"
              onClick={() => handleCardClick(game.id)}
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-purple-400 mb-2">
                  {game.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
                  Released: {game.released || "N/A"}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-800 dark:text-gray-300">
                  <div>Rating: ⭐ {game.rating}</div>
                  <div>{game.metacritic ? `MC: ${game.metacritic}` : ""}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <div className="text-black dark:text-white">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>

      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[80vh] shadow-2xl relative animate-fadeIn"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-gray-800 dark:bg-gray-600 text-white p-2 rounded-full hover:bg-red-600 dark:hover:bg-red-600 transition-colors z-10"
            >
              <FaTimes />
            </button>

            {loadingDetails ? (
              <div className="flex items-center justify-center h-96">
              <div className="w-10 h-10 border-6 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
              </div>
            ) : gameDetails ? (
              <>
              <div className="w-full h-64 flex flex-col justify-end bg-gray-900">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${gameDetails.background_image})` }}>
                  <div className="flex flex-col justify-end w-full h-full bg-gradient-to-t from-gray-900 to-transparent">
                    <h2 className="text-3xl font-bold text-white p-4">{gameDetails.name}</h2>
                  </div>
                </div>
                </div>

                <div className="p-6 overflow-y-auto h-[calc(80vh-16rem)]">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCalendarAlt className="mr-2 text-purple-500" />
                      <div>Released: {gameDetails.released || "Unknown"}</div>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaStar className="mr-2 text-yellow-500" />
                      <div>Rating: {gameDetails.rating}/5 ({gameDetails.ratings_count} votes)</div>
                    </div>
                    {gameDetails.metacritic && (
                      <div className="flex items-center">
                        <div className={`px-2 py-1 rounded font-bold ${
                          gameDetails.metacritic >= 75 
                            ? "bg-green-500 text-white" 
                            : gameDetails.metacritic >= 50 
                            ? "bg-yellow-500 text-black" 
                            : "bg-red-500 text-white"
                        }`}>
                          {gameDetails.metacritic}
                        </div>
                        <div className="ml-2 text-gray-700 dark:text-gray-300">Metacritic</div>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">About</h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      {gameDetails.description 
                        ? parse(gameDetails.description)
                        : "No description available."}
                    </div>
                  </div>

                  {gameDetails.platforms && gameDetails.platforms.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {gameDetails.platforms.map((platform) => (
                          <div 
                            key={platform.platform.id}
                            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-300 flex items-center"
                          >
                            <FaGamepad className="mr-1" />
                            {platform.platform.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {gameDetails.genres && gameDetails.genres.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Genres</h3>
                      <div className="flex flex-wrap gap-2">
                        {gameDetails.genres.map((genre) => (
                          <div 
                            key={genre.id}
                            className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full text-sm text-purple-800 dark:text-purple-200"
                          >
                            {genre.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {gameDetails.website && (
                    <div className="mt-6">
                      <a
                        href={gameDetails.website}
                        target="_blank"
                        className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
                      >
                        Visit Website
                        <FaArrowRight className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-gray-600 dark:text-gray-400">
                Failed to load game details. Please try again.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGrid;