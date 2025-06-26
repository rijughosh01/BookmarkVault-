import React, { useState } from "react";
import API from "../api";

const CATEGORIES = ["Learning", "Work", "Personal", "Other"];

function BookmarkForm({ onAdd, onClose, initialData, onUpdate }) {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      url: "",
      description: "",
      category: "",
    }
  );
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData && onUpdate) {
        // Update mode
        const res = await API.put(`/bookmarks/${initialData._id}`, form);
        onUpdate(res.data);
      } else {
        // Create mode
        const res = await API.post("/bookmarks", form);
        if (onAdd) onAdd(res.data);
      }
      setForm({ title: "", url: "", description: "", category: "" });
      setError("");
      if (onClose) onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save bookmark");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Bookmark" : "Add Bookmark"}
        </h2>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Website URL</label>
          <input
            name="url"
            type="url"
            placeholder="https://example.com"
            value={form.url}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            name="title"
            placeholder="Website title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            name="description"
            placeholder="Brief description of the website"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 border border-gray-300 rounded px-4 py-2 font-semibold hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700"
          >
            {initialData ? "Update" : "Save Bookmark"}
          </button>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
}

export default BookmarkForm;
