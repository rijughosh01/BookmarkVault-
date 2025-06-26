import React, { useEffect, useState } from "react";
import API from "../api";
import BookmarkForm from "./BookmarkForm";

const CATEGORIES = ["All Categories", "Learning", "Work", "Personal", "Other"];

function BookmarkList({ refresh }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [editBookmark, setEditBookmark] = useState(null);

  function getDomain(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  }

  const fetchBookmarks = async (q = "", cat = "All Categories") => {
    setLoading(true);
    try {
      const params = {};
      if (q) params.q = q;
      if (cat && cat !== "All Categories") params.category = cat;
      const res = await API.get("/bookmarks", { params });
      setBookmarks(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch bookmarks");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookmarks(search, category);
    // eslint-disable-next-line
  }, [refresh, search, category]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/bookmarks/${id}`);
      setBookmarks(bookmarks.filter((b) => b._id !== id));
    } catch {
      setError("Failed to delete bookmark");
    }
  };

  const handleUpdate = (updated) => {
    setBookmarks((prev) =>
      prev.map((b) => (b._id === updated._id ? updated : b))
    );
    setEditBookmark(null);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={search}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100 bg-gray-50"
          />
        </div>
        <select
          value={category}
          onChange={handleCategory}
          className="border border-gray-200 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="border border-gray-200 rounded px-3 py-2 bg-white hover:bg-gray-100 flex items-center"
          title="Filter"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707l-6.414 6.414A2 2 0 0 0 13 14.586V19a1 1 0 0 1-1.447.894l-2-1A1 1 0 0 1 9 18v-3.414a2 2 0 0 0-.293-1.293L2.293 6.707A1 1 0 0 1 2 6V4z" />
          </svg>
        </button>
      </div>
      {loading && <div className="text-gray-500 mb-2">Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {bookmarks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-5xl text-gray-300 mb-4">+</div>
          <div className="text-lg font-semibold mb-2">No bookmarks yet</div>
          <div className="text-gray-500 mb-4">
            Start building your collection by adding your first bookmark.
          </div>
        </div>
      ) : (
        <ul className="space-y-4">
          {bookmarks.map((b) => (
            <li
              key={b._id}
              className="flex items-center justify-between bg-white rounded shadow p-4"
            >
              <div className="flex items-center gap-3">
                {/* Favicon */}
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(
                    b.url
                  )}&sz=32`}
                  alt="favicon"
                  className="w-6 h-6 mr-2 rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/favicon.ico";
                  }}
                />
                <div>
                  {/* Title */}
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {b.title}
                  </a>
                  {/* URL */}
                  <div className="text-gray-500 text-sm">{b.url}</div>
                  {/* Description */}
                  <div className="text-gray-700 text-sm mt-1">
                    {b.description ? (
                      b.description
                    ) : (
                      <span className="italic text-gray-400">
                        No description
                      </span>
                    )}
                  </div>
                  {/* Category */}
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-50 text-blue-600 rounded">
                    {b.category ? b.category : "Uncategorized"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditBookmark(b)}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editBookmark && (
        <BookmarkForm
          initialData={editBookmark}
          onClose={() => setEditBookmark(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default BookmarkList;
