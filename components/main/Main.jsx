import React from "react";
import GameGrid from "../ui/GameGrid";
import SearchBar from "../ui/SearchBar";

const Main = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <SearchBar/>
      <GameGrid />
    </div>
  );
};

export default Main;
