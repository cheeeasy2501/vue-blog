const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = require("../config/secret.config");

class AuthController {
  async getUserByToken(req, res) {
    try {
      const id = req.userId;

      if (id) {
        const user = await User.findOne({ _id: id }).select(["email", "login"]);

        if (user) {
          return res
            .status(200)
            .json({ auth: true, user: user, message: "User find" });
        }
      }
      res.status(401).json({ auth: false, message: "Unauthorized!" });
    } catch (err) {
      res.status(500).json({ message: `Server error: ${err}` });
    }
  }

  async registerUser(req, res) {
    try {
      const { email, login, password, firstname, lastname } = req.body;
      const findUser = await User.findOne({ $or: [{ email }, { login }] });

      if (findUser) {
        return res
          .status(302)
          .json({ message: "A user with that username or email exists" });
      }

      let user = await new User({
        email,
        login,
        password,
        firstname,
        lastname,
        createdAt: Date.now(),
      });
      
      user.save();

      let token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 });

      res
        .status(200)
        .header("Access-Control-Expose-Headers", "x-access-token")
        .header("x-access-token", token)
        .json({
          auth: true,
          user: { email: user.email, login: user.login },
          message: "User created",
        });
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
        });
      }

      let token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 });

      res
        .status(200)
        .header("Access-Control-Expose-Headers", "x-access-token")
        .header("x-access-token", token)
        .json({ auth: true, user: { email: user.email, login: user.login } });
    } catch (err) {
      res.status(500).json({ message: `Error: ${err}` });
    }
  }
}

module.exports = new AuthController();
