import React, { useState } from "react";
import { ArrowLeft } from "lucide-react"; 

const Login = ({setSignup, goBack}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    setSignup(true);
  };

  return (
    <div className="flex min-h-screen">

      <div className="w-1/2 flex flex-col bg-gray-900 text-white">
        <div className="flex-grow flex flex-col justify-center items-center px-6">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 text-white hover:text-purple-400 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
          <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-500">
              Welcome to Nexus
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="text-sm text-center text-gray-400 pt-4">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-purple-500 hover:underline font-medium"
                onClick={handleSignup}
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img
          src="../../assets/images/Login.jpg"
          alt="Game Collage"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
