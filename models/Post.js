const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true,'Please add slug'],
  },
  title: {
    type: String,
    required: [true,'Please add title'],
  },
  published: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: [true,'Please add author'],
  },
  content: {
    type: String,
    required: [true,'Please add content'],
  },
});

module.exports = mongoose.model("Posts", postSchema);
