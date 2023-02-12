const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  no_of_pages: {
    type: Number,
  },
  published_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("book", bookSchema, "books");
