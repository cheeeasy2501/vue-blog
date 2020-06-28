const jwt = require("jsonwebtoken");

class AuthMiddleware {
  async verifyToken(req, res, next) {
    const secret = require("../config/secret.config");
    const token = req.headers["x-access-token"];

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

  async registerValidate(req, res, next) {
    let { email, login, password } = req.body;

    if ((email || login || password) === "") {
      res.status(400).json({ message: "Invalid body" });
    }

    next();
  }
}

module.exports = new AuthMiddleware();
