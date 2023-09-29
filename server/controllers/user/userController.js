const pool = require("../../db"); // Import the pool object from your db.js file

// Add a new user
async function addUser(req, res) {
  const { name, email, contact_info, student_id, team_id } = req.body;

  try {
    // Insert a new user into the database
    const result = await pool.query(
      "INSERT INTO users (name, email, contact_info, student_id, team_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, contact_info, student_id, team_id]
    );

    // Send the added user as the response
    res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Error adding user" });
  }
}

// Get all users based on team ID
async function getUsersByTeam(req, res) {
  const { team_id } = req.params;

  try {
    // Query all users from the database based on team ID
    const result = await pool.query("SELECT * FROM users WHERE team_id = $1", [
      team_id,
    ]);

    // Send the list of users as the response
    res.json({ users: result.rows });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
}

module.exports = { addUser, getUsersByTeam };
