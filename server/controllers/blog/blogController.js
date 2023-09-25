const pool = require("../../db");

// Add a new blog entry
const addBlog = async (req, res) => {
  try {
    const { title, imageLink, videoLink, content, author, created_at } =
      req.body.newBlogPost;
    const query = `
      INSERT INTO blogs (title, imageLink, videoLink, content, author, created_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [title, imageLink, videoLink, content, author, created_at];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding blog entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all blog entries
const getAllBlogs = async (req, res) => {
  try {
    const query = "SELECT * FROM blogs ORDER BY created_at DESC";
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error retrieving blog entries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addBlog,
  getAllBlogs,
};
