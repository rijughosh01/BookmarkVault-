import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <span
          className="text-blue-600 text-2xl font-extrabold flex items-center cursor-pointer tracking-tight"
          onClick={() => navigate("/#features")}
        >
          <svg
            className="w-7 h-7 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
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
        <button
          onClick={() => navigate("/#features")}
          className="ml-4 text-gray-700 hover:text-blue-600 font-medium hidden md:inline transition"
        >
          Features
        </button>
        <button
          onClick={() => navigate("/#howitworks")}
          className="ml-2 text-gray-700 hover:text-blue-600 font-medium hidden md:inline transition"
        >
          How It Works
        </button>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            {/* Desktop username */}
            <span
              className="mr-2 font-semibold cursor-pointer hover:text-blue-600 transition hidden md:inline"
              onClick={() => navigate("/profile")}
            >
              {user.username}
            </span>
            {/* Desktop sign out */}
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-1 rounded transition border border-gray-200 hover:bg-gray-100 hidden md:inline"
            >
              Sign Out
            </button>
            {/* Mobile: profile icon */}
            <button
              onClick={() => navigate("/profile")}
              className="md:hidden p-2 rounded-full hover:bg-blue-50 transition"
              title="Profile"
            >
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
              </svg>
            </button>
            {/* Mobile: sign out icon */}
            <button
              onClick={handleLogout}
              className="md:hidden p-2 rounded-full hover:bg-blue-50 transition"
              title="Sign Out"
            >
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* Desktop: sign in/register */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-1 rounded transition hidden md:inline"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow transition hidden md:inline"
            >
              Get Started
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow transition"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
