const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  body: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = moongose.model("Comment", CommentSchema);
