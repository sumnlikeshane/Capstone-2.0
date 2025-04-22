import React, { useState } from "react";
import Header from "../components/main/Header";
import Main from "../components/main/Main";
import Footer from "../components/main/Footer";
import Login from "../components/main/Login";
import Signup from "../components/main/Signup";

function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleShowLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const handleShowSignup = () => {
    setLogin(false);
    setSignup(true);
  };

  const handleBackToHome = () => {
    setLogin(false);
    setSignup(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {login ? (
        <Login setSignup={handleShowSignup} goBack={handleBackToHome} />
      ) : signup ? (
        <Signup setLogin={handleShowLogin} goBack={handleBackToHome} />
      ) : (
        <>
          <Header setLogin={handleShowLogin} />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
