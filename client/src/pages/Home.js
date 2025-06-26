import React from "react";
import { Link } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";

function Home() {
  return (
    <div>
      <div className="bg-gray-50 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Save All Your Important{" "}
          <span className="text-blue-600">Websites</span> in One Place
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-xl">
          Never lose track of important websites again. BookmarkVault helps you
          organize, search, and access all your saved links from any device.
        </p>
        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Start Saving Now - It's Free
          </Link>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
}

export default Home;
