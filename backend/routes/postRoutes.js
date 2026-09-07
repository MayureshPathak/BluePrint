const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Post = require('../models/Post');
const User = require('../models/User');

// Get all posts (sorted newest first)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    // Sort posts from newest to oldest
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Upload a new post
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { authorName, authorHandle, authorEmail, authorAvatar, text, tag } = req.body;
    
    const postData = {
      authorName: authorName || 'Anonymous',
      authorHandle: authorHandle || '@anonymous',
      authorEmail: authorEmail || null,
      authorAvatar: authorAvatar || null,
      text: text || '',
      tag: tag || null,
      imageFile: req.file ? `/uploads/${req.file.filename}` : null
    };

    const newPost = new Post(postData);
    await newPost.save();
    
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error during upload', error: error.message });
  }
});

// Toggle a Like & Send Notification
router.post('/:id/like', async (req, res) => {
  try {
    const { email, userName } = req.body; // email is the actor clicking like
    if (!email) return res.status(400).json({ message: 'User email is required' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (!post.likes) post.likes = [];

    const index = post.likes.indexOf(email);
    const hasLiked = index !== -1;
    
    if (!hasLiked) {
      post.likes.push(email);
      
      // Fire Notification to Post Author
      if (post.authorEmail && post.authorEmail !== email) { // Don't notify yourself
         const targetUser = await User.findOne({ email: post.authorEmail });
         if (targetUser) {
            targetUser.notifications.push({
               type: 'LIKE',
               actorEmail: email,
               actorName: userName || email.split('@')[0],
               postId: post._id,
               postTextSnippet: post.text ? post.text.substring(0, 40) : 'a post with an image'
            });
            await targetUser.save();
         }
      }
    } else {
      post.likes.splice(index, 1);
    }

    await post.save();
    res.status(200).json({ message: 'Like toggled', likes: post.likes });
  } catch (error) {
    console.error('Error toggling like:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Delete a post (only by author)
router.delete('/:id', async (req, res) => {
  try {
    const email = req.query.email; // Safer to use query params for DELETE
    const postId = req.params.id;
    const fs = require('fs');
    const path = require('path');

    console.log(`Delete request for post ${postId} by ${email}`);

    if (!email) return res.status(400).json({ message: 'Email is required' });

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.authorEmail !== email) {
      console.warn(`Unauthorized delete attempt: ${email} tried to delete post by ${post.authorEmail}`);
      return res.status(403).json({ message: 'You can only delete your own posts' });
    }

    // Delete associated image if it exists
    if (post.imageFile) {
      try {
        const filename = post.imageFile.split('/').pop();
        const filePath = path.join(__dirname, '..', 'uploads', filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`Associated image deleted: ${filePath}`);
        }
      } catch (err) {
        console.error('Failed to delete associated post image:', err);
      }
    }

    await Post.findByIdAndDelete(postId);
    console.log(`Post ${postId} deleted successfully from database`);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
