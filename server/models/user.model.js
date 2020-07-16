const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  birthday: { type: Date },
  createdAt: { type: Date, required: true },
  posts: { type: Schema.Types.ObjectId, ref: "Post" },
});

UserSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Wrond login or password. Try again.",
      auth: false,
      token: null,
    });
  }

  return user;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
