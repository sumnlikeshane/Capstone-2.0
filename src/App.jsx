import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/main/HomePage";
import Login from "../components/main/Login";
import Signup from "../components/main/Signup";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
