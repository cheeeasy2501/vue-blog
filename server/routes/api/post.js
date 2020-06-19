const express = require('express');
const mongoose = require('mongoose');
const Post = require('../../models/post')
const router = express.Router();

// Get Posts
router.get('/page/:pageNumber', async (req, res) => {
    try {
        const pageLimit = 9;
        const { pageNumber } = req.params;
        const postCount = await Post.find({}).countDocuments();
        const pageCount = Math.ceil( postCount / pageLimit);

        if ((pageNumber - 1) < 0 || (pageNumber > pageCount)) {
            return res.status(404).json({ message: 'Not Found' });
        }

        const skip = pageNumber - 1;
        const postCollection = await Post.find({}).skip((skip) * pageLimit).limit(pageLimit);

        res.status(200).json({ postCollection, postCount });
    } catch (e) {
        return res.status(400).json({ message: 'Server Error' });
    }
});

//Get Post By Id
router.get('/:id', async (req, res) => {
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
})

// Add Post
router.post('/create', async (req, res) => {
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
    } catch (err) {
        res.status(500).json({ message: `Server Error: ${err}` });
    }
});

// Delete Post
router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;

        await Post.deleteOne({ _id: id }, (err) => {
            return res.status(404).json({ message: 'Post not found or Invalid body' });
        });

        res.status(410).json({ message: 'Post deleted' });
    } catch (e) {
        res.status(500).json({ message: `Server Error: ${err}` });
    }

});

// Update Post
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;

        await Post.updateOne({ _id: id },
            { $set: { title, body } }, (err) => {
                if (err) {
                    throw err;
                }
                return res.status(200).json();
            }
        );
    } catch (e) {
        return res.status(500);
    }
})

module.exports = router;