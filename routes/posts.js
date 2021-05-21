const router = require("express").Router();

// Models
const Posts = require("../models/Post");

// Get all posts e.g. http://localhost:3000/api/posts
router.get("/", async (req, res) => {
  try {
    const post = await Posts.find();

    res.send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get post by slug e.g. http://localhost:3000/api/posts/first-post
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const post = await Posts.find({ slug: slug });

    res.send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
