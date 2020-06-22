const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret.config");

class AuthController {
  async registerUser(req, res) {
    try {
      const { email, login, password, firstname, lastname } = req.body;
      const findUser = await User.findOne({ $or: [{ email }, { login }] });

      if (findUser) {
        return res
          .status(302)
          .json({ message: "A user with that username or email exists" });
      }
      const encryptedpassword = bcrypt.hashSync(password, 8);

      const user = await new User({
        email,
        login,
        password: encryptedpassword,
        firstname,
        lastname,
        createdAt: Date.now(),
      });
      user.save();

      let token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 });

      res
        .status(200)
        .header("x-access-token", token)
        .json({ auth: true, user, message: "User created" });
    } catch (err) {
      res.status(500).json({ message: `Server error: ${err}` });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
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

      let token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 });

      res
        .status(200)
        .header("Access-Control-Expose-Headers", "x-access-token")
        .header("x-access-token", token)
        .json({ auth: true, user });
    } catch (err) {
      res.status(500).json({ message: `Error: ${err}` });
    }
  }

  async verifyToken(req, res, next) {
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).json({ message: "No token!" });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized!" });
      }

      req.userId = decoded.id;
      next();
    });
  }
}

module.exports = new AuthController();
