const express = require("express");
const router = express.Router();

const postRoutes = require("./api/post.routes");
const authRoutes = require("./api/auth.routes");

router.use("/post", postRoutes);
router.use("/", authRoutes);

module.exports = router;
