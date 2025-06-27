import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

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
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 tracking-tight leading-tight">
          Save All Your Important{" "}
          <span className="text-blue-600">Websites</span> in One Place
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl">
          Never lose track of important websites again. BookmarkVault helps you
          organize, search, and access all your saved links from any device.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleStartSaving}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg transition"
          >
            Start Saving Now - It's Free
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 shadow transition"
          >
            Watch Demo
          </button>
        </div>
      </div>

      <div ref={featuresRef}>
        <FeaturesSection />
      </div>

      <section ref={howItWorksRef} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">How It Works</h2>
          <ol className="space-y-8 text-lg">
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

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-red-600">Sorry!</h3>
            <p className="mb-6 text-gray-700">
              Demo video is not available at the moment.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
