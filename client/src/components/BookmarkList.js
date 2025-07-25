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
      <div className="flex items-center gap-3 mb-8">
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
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 bg-gray-50"
          />
        </div>
        <select
          value={category}
          onChange={handleCategory}
          className="border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="border border-gray-200 rounded-lg px-3 py-2 bg-white hover:bg-gray-100 flex items-center"
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
      {loading && (
        <div className="flex flex-col items-center justify-center py-8">
          <span className="relative flex h-10 w-10 mb-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-600"></span>
            <svg
              className="absolute inset-0 m-auto w-6 h-6 text-white animate-spin"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
              />
              <path
                className="opacity-75"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12a8 8 0 018-8"
              />
            </svg>
          </span>
          <span className="text-blue-600 font-semibold text-lg animate-pulse">
            Loading bookmarks...
          </span>
        </div>
      )}
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
        <ul className="space-y-6">
          {bookmarks.map((b) => (
            <li
              key={b._id}
              className="flex items-center justify-between bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                {/* Favicon */}
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(
                    b.url
                  )}&sz=32`}
                  alt="favicon"
                  className="w-8 h-8 rounded"
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
                    className="text-blue-600 font-semibold hover:underline text-lg"
                  >
                    {b.title}
                  </a>
                  {/* URL */}
                  <div className="text-gray-500 text-xs break-all">{b.url}</div>
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
                {/* Desktop: Edit and Delete as text buttons */}
                <button
                  onClick={() => setEditBookmark(b)}
                  className="text-blue-500 hover:text-blue-700 font-semibold px-2 py-1 rounded transition hidden md:inline-flex"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="text-red-500 hover:text-red-700 font-semibold px-2 py-1 rounded transition hidden md:inline-flex"
                >
                  Delete
                </button>
                {/* Mobile: Edit and Delete as icons */}
                <button
                  onClick={() => setEditBookmark(b)}
                  className="md:hidden p-2 rounded-full hover:bg-blue-50 transition"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="md:hidden p-2 rounded-full hover:bg-red-50 transition"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
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
