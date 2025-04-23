import React from "react";
import GameGrid from "../ui/GameGrid";
import SearchBar from "../ui/SearchBar";
import Hero from "../ui/Hero";

import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
 
  return (
    <div className="min-h-screen">
      <Header />
      <Hero/>
      <SearchBar/>
      <GameGrid />
      <Footer/>
    </div>
  );
};

export default HomePage;
