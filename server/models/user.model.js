const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  birthday: { type: Date },
  createdAt: { type: Date, required: true }
});

module.exports = mongoose.model("User", UserSchema);
