const pool = require("../../db"); // Import the pool object from your db.js file

// Add a Competition
async function addCompetition(req, res) {
  const { name, description, type, start_date, end_date, no_of_teamMembers } =
    req.body;

  try {
    // Insert a new competition into the database
    const result = await pool.query(
      "INSERT INTO competition (name, description, type, start_date, end_date, no_of_teamMembers) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, description, type, start_date, end_date, no_of_teamMembers]
    );

    // Send the added competition as the response
    res.status(201).json({ competition: result.rows[0] });
  } catch (error) {
    console.error("Error adding competition:", error);
    res.status(500).json({ error: "Error adding competition" });
  }
}

// Get All Competitions
async function getAllCompetitions(req, res) {
  try {
    // Query all competitions from the database
    const result = await pool.query("SELECT * FROM competition");
    // Send the list of competitions as the response
    res.json({ competitions: result.rows });
  } catch (error) {
    console.error("Error fetching competitions:", error);
    res.status(500).json({ error: "Error fetching competitions" });
  }
}

module.exports = {
  addCompetition,
  getAllCompetitions,
};
