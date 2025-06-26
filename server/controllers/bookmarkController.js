const Bookmark = require("../models/bookmark");

exports.createBookmark = async (req, res) => {
  try {
    const { title, url, description, category } = req.body;
    const bookmark = new Bookmark({
      title,
      url,
      description,
      category,
      user: req.user._id,
    });
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Could not create bookmark", details: err.message });
  }
};

exports.getBookmarks = async (req, res) => {
  try {
    const { q, category } = req.query;
    const query = { user: req.user._id };
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { url: { $regex: q, $options: "i" } },
      ];
    }
    if (category && category !== "All Categories") {
      query.category = category;
    }
    const bookmarks = await Bookmark.find(query);
    res.json(bookmarks);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Could not fetch bookmarks", details: err.message });
  }
};

exports.updateBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, description, category } = req.body;
    const bookmark = await Bookmark.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title, url, description, category },
      { new: true }
    );
    if (!bookmark) return res.status(404).json({ error: "Bookmark not found" });
    res.json(bookmark);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Could not update bookmark", details: err.message });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const bookmark = await Bookmark.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });
    if (!bookmark) return res.status(404).json({ error: "Bookmark not found" });
    res.json({ message: "Bookmark deleted" });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Could not delete bookmark", details: err.message });
  }
};
