import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../src/context/AuthContext";
import { ArrowLeft } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col bg-gray-900 text-white relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-white hover:text-purple-400 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <form
          onSubmit={handleSignup}
          className="flex-grow flex flex-col justify-center items-center px-6"
        >
          <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-500">
              Create your account
            </h2>

            {error && <p className="text-red-400 text-center">{error}</p>}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Sign Up
            </button>

            <div className="text-sm text-center text-gray-400 pt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-purple-500 hover:underline font-medium"
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-1/2">
        <img
          src="../../assets/images/Signup.jpg"
          alt="Game Collage"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
