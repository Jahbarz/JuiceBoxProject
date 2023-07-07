const express = require('express');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

const { getAllTags, getPostsByTagName } = require('../db');


tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  // Read the tag name from the params
  const { tagName } = req.params;

  try {
    // Use our method to get posts by tag name from the db
    const posts = await getPostsByTagName({ tags: tagName });

    // Send the response object to the client { posts: // the posts }
    res.status(200).json({ posts });
  } catch ({ name, message }) {
    // Forward the name and message to the error handler
    next({ name, message });
  }
});

module.exports = tagsRouter;