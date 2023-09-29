const pool = require("../../db"); // Import the pool object from your db.js file

// Add a new team
async function addTeam(req, res) {
  const { team_name, competition_id, team_point, university_name } = req.body;

  try {
    // Insert a new team into the database
    const result = await pool.query(
      "INSERT INTO teams (team_name, competition_id, team_point, university_name) VALUES ($1, $2, $3, $4) RETURNING *",
      [team_name, competition_id, team_point, university_name]
    );

    // Send the added team as the response
    res.status(201).json({ team: result.rows[0] });
  } catch (error) {
    console.error("Error adding team:", error);
    res.status(500).json({ error: "Error adding team" });
  }
}

// Get teams based on competition_id
async function getTeamsByCompetition(req, res) {
  const { competition_id } = req.params;

  try {
    // Query teams based on the provided competition_id
    const result = await pool.query(
      "SELECT * FROM teams WHERE competition_id = $1",
      [competition_id]
    );

    // Send the list of teams as the response
    res.json({ teams: result.rows });
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Error fetching teams" });
  }
}

module.exports = {
  addTeam,
  getTeamsByCompetition,
};
