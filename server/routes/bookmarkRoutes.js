const express = require("express");
const {
  createBookmark,
  getBookmarks,
  updateBookmark,
  deleteBookmark,
} = require("../controllers/bookmarkController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, createBookmark);
router.get("/", auth, getBookmarks);
router.put("/:id", auth, updateBookmark);
router.delete("/:id", auth, deleteBookmark);

module.exports = router;
