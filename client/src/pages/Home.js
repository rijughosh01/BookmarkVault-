import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  React.useEffect(() => {
    if (location.hash === "#features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#howitworks" && howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

 
  const handleStartSaving = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

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
          <button
            onClick={handleStartSaving}
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Start Saving Now - It's Free
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>
      </div>
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <ol className="space-y-6 text-lg">
            <li>
              <span className="font-bold text-blue-600">1.</span>{" "}
              <b>Register</b> for a free account or sign in.
            </li>
            <li>
              <span className="font-bold text-blue-600">2.</span>{" "}
              <b>Add bookmarks</b> using the "+ Add Bookmark" button. Fill in
              the website details and select a category.
            </li>
            <li>
              <span className="font-bold text-blue-600">3.</span>{" "}
              <b>Organize</b> your bookmarks by category and description.
            </li>
            <li>
              <span className="font-bold text-blue-600">4.</span>{" "}
              <b>Search & filter</b> your bookmarks instantly using the search
              bar and category filter.
            </li>
            <li>
              <span className="font-bold text-blue-600">5.</span>{" "}
              <b>Edit or delete</b> bookmarks anytime.
            </li>
            <li>
              <span className="font-bold text-blue-600">6.</span> <b>Access</b>{" "}
              your bookmarks from any device, securely.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
