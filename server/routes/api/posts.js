const express = require('express');
const mongoose = require('mongoose');
const Post = require('../../models/post')
const router = express.Router();

// Get Posts
router.get('/:pageNumber', async (req, res) => {
    try {
        const pageLimit = 12;
        const { pageNumber } = req.params;
        const postsCount = Math.ceil(await Post.find({}).count() / pageLimit);

        if ((pageNumber - 1) < 0 || (pageNumber > postsCount)) {
            return res.status(404).json({ message: 'Not Found' });
        }

        const skip = pageNumber - 1;
        const postCollection = await Post.find({}).skip((skip) * pageLimit).limit(pageLimit);

        res.status(200).json(postCollection);

    } catch (e) {
        return res.status(400).json({ message: 'Server Error' });
    }
});

// Add Post
router.post('/create_post', async (req, res) => {
    try {
        const { userId, title, body } = req.body;
        const post = await new Post({
            userId,
            title,
            body
        });

        if (!post) {
            return res.status(400).json('Bad Request');
        };
        await post.save();
        res.status(201).json('Post created');
    } catch (e) {
        res.status(500).json({ message: `Server Error: ${e}` });
    }
});

// Delete Post

module.exports = router;