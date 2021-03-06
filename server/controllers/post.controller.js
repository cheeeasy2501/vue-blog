const Post = require("../models/post.model");

class PostController {
  async getPage(req, res) {
    try {
      const postsPerPage = 12;
      const { pageNumber } = req.params;
      const postsCount = await Post.find({}).countDocuments();
      const pageLimit = Math.ceil(postsCount / postsPerPage);

      if (pageNumber - 1 < 0 || pageNumber > pageLimit) {
        return res.status(404).json({ message: "Not Found" });
      }

      const skip = pageNumber - 1;
      const posts = await Post.find({})
        .sort({ date: -1 })
        .skip(skip * postsPerPage)
        .limit(postsPerPage);

      res.status(200).json({ posts, postsCount, pageLimit });
    } catch (err) {
      return res.status(400).json({ message: `Server Error ${err}` });
    }
  }

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findOne({ _id: id });

      if (!post) {
        return res.status(404).json(`Not Found`);
      }

      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(`Server error ${err}`);
    }
  }

  async createPost(req, res) {
    try {
      const { userId, title, body, date } = req.body;
      const post = await new Post({
        userId,
        title,
        body,
        date,
      });

      if (!post) {
        return res.status(400).json("Bad Request");
      }

      await post.save();
      res.status(201).json("Post created");
    } catch (err) {
      res.status(500).json({ message: `Server Error: ${err}` });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.body;

      await Post.deleteOne({ _id: id }, () => {
        return res
          .status(404)
          .json({ message: "Post not found or Invalid body" });
      });

      res.status(410).json({ message: "Post deleted" });
    } catch (err) {
      res.status(500).json({ message: `Server Error: ${err}` });
    }
  }

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, body } = req.body;

      await Post.updateOne({ _id: id }, { $set: { title, body } }, (err) => {
        if (err) {
          throw err;
        }
        return res.status(200).json();
      });
    } catch (e) {
      return res.status(500);
    }
  }

  async randomData(req, res) {
    try {
      for (let i = 0; i < 50; i++) {
        const userId = i;
        const title = `Title ${i}`;
        const content = `content ${i}`;
        const date = Date.now();
        const post = await new Post({
          userId,
          title,
          content,
          date,
        });

        await post.save();
      }
      res.status(201).json("Posts created");
    } catch (err) {
      res.status(500).json({ message: `Server Error: ${err}` });
    }
  }
}

module.exports = new PostController();
