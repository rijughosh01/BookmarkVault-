import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-2xl font-bold flex items-center">
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
            />
          </svg>
          BookmarkVault
        </span>
        <Link
          to="/"
          className="ml-6 text-gray-700 hover:text-blue-600 font-medium hidden sm:inline"
        >
          Features
        </Link>
        <span className="ml-4 text-gray-700 hover:text-blue-600 font-medium hidden sm:inline">
          How It Works
        </span>{" "}
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <span className="mr-2 font-semibold">{user.username}</span>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
