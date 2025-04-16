import React from "react";
import Header from "../components/main/Header";
import Main from "../components/main/Main";
import Footer from "../components/main/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;