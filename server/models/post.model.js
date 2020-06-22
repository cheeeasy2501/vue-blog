const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});

module.exports = mongoose.model("Post", PostSchema);
