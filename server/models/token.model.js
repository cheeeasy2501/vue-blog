const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  expireAt: { type: Date, required: true },
});

module.exports = mongoose.model("Token", TokenSchema);
