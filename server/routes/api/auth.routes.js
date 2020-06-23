const express = require("express");
const router = express.Router();
const AuthContoller = require("../../controllers/auth.controller");
const AuthMiddleware = require("../../middlewares/auth.middleware");

// Register User
router.route("/register").post(AuthContoller.registerUser);

// Login User
router.route("/login").post(AuthContoller.loginUser);

module.exports = router;
