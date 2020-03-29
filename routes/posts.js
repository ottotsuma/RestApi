const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets back all the posts 
router.get ('/', (req,res) => {
    try {
        const posts = posts.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});

// submits a post
router.post('/', (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err});
    });
});

//specific post
router.get('/:postId', (req,res) => {
    Post.findById(req.params.postId);
    res.json(post);
});

// delete post
router.delete('/:postId', (req,res) => {
    Post.remove({_id: req.params.postId});
    res.json(removedPost);
});

// update a post
router.patch('/:postId', (req,res) => {
    Post.updateOne({_id: req.params.postId}, { $set: {title: req.body.title}});
    res.json(updatePost);
});

module.exports = router;