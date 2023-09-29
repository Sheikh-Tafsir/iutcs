const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blog/blogController");

// Add a new blog entry
router.post("/add", blogController.addBlog);

// Get all blog entries
router.get("/all", blogController.getAllBlogs);

module.exports = router;
