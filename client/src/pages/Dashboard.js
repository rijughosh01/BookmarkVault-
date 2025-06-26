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
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">My Bookmarks</h2>
          <p className="text-gray-500">
            Manage and organize all your saved websites
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
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
