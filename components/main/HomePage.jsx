import React, { useState } from "react";
import GameGrid from "../ui/GameGrid";
import SearchBar from "../ui/SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "../ui/ChatWidget";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen">
      <Header />
      <SearchBar value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <GameGrid searchQuery={searchQuery} />
      <Footer/>
      <ChatWidget />
    </div>
  );
};

export default HomePage;
