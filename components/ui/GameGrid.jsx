import React, { useEffect, useState } from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const API_KEY = "a583e68ec25f4f22b4a2f37e82ca128b";

  const fetchGames = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      );
      const data = await res.json();
      setGames(data.results);
      setTotalPages(data.pagination.pages);
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching games:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div className="text-center text-purple-400 py-20 text-lg">
        Loading games...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen px-6 py-12 text-white">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-900 rounded-lg overflow-hidden hover:bg-purple-900 hover:scale-105 duration-300"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">{game.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                Released: {game.released || "N/A"}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Rating: ⭐ {game.rating}</span>
                <span>{game.metacritic ? `MC: ${game.metacritic}` : ""}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <FaArrowLeft/>
        </button>
        <span className="text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default GameGrid;
