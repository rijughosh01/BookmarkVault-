const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^(ftp|http|https):\/\/[^ "]+$/.test(v),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", bookmarkSchema);
