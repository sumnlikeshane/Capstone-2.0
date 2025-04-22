import React from "react";
import GameGrid from "../ui/GameGrid";
import SearchBar from "../ui/SearchBar";
import Hero from "../ui/Hero";



const Main = () => {
 
  return (
    <div className="min-h-screen">
      <Hero/>
      <SearchBar/>
      <GameGrid />
    </div>
  );
};

export default Main;
