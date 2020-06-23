const User = require("../models/user.model");
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

      const user = await User.findByCredentials(email, password);
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
