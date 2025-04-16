import React from "react";
import GameGrid from "../ui/GameGrid";
import SearchBar from "../ui/SearchBar";

const Main = () => {
  return (
    <div className="text-white min-h-screen">
      <SearchBar/>
      <GameGrid />
    </div>
  );
};

export default Main;
