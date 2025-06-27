import React, { useState } from "react";
import BookmarkForm from "../components/BookmarkForm";
import BookmarkList from "../components/BookmarkList";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setShowForm(false);
    setRefresh((r) => !r);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-extrabold">My Bookmarks</h2>
          <p className="text-gray-500 text-lg">
            Manage and organize all your saved websites
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow transition"
        >
          + Add Bookmark
        </button>
      </div>
      <BookmarkList refresh={refresh} />
      {showForm && (
        <BookmarkForm onAdd={handleAdd} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default Dashboard;
