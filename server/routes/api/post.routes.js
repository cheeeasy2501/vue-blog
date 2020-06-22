const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/post.controller");

// Get Posts
router.route("/page/:pageNumber").get(PostController.getPage);

//Get Post By Id
router.route("/:id").get(PostController.getPostById);

// Add Post
router.route("/create").post(PostController.createPost);

// Delete Post
router.route("/delete").delete(PostController.deletePost);

// Update Post
router.route("/update/:id").put(PostController.updatePost);

// Random Data
router.route("/data/random").post(PostController.randomData);

module.exports = router;
