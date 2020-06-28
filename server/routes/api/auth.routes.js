const express = require("express");
const router = express.Router();
const { REGISTER, TOKEN, LOGIN } = require("../../config/api/auth.config");
const AuthContoller = require("../../controllers/auth.controller");
const AuthMiddleware = require("../../middlewares/auth.middleware");

// Register User
router
  .route("/register")
  .post([AuthMiddleware.registerValidate], AuthContoller.registerUser);

// Login User
router.route("/login").post(AuthContoller.loginUser);

// Check token
router
  .route("/token")
  .post([AuthMiddleware.verifyToken], AuthContoller.getUserByToken);

module.exports = router;
