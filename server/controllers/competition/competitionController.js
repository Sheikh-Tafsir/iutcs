const pool = require("../../db"); // Import the pool object from your db.js file

// Add a Competition
async function addCompetition(req, res) {
  const {
    name,
    description,
    start_date,
    end_date,
    registration_start_date,
    registration_end_date,
    no_of_team_member_min,
    no_of_team_member_max,
    fees,
    event_id
  } = req.body;

  try {
    // Insert a new competition into the database
    const result = await pool.query(
      "INSERT INTO competitions (name, description, start_date, end_date, registration_start_date, registration_end_date, no_of_team_member_min, no_of_team_member_max, fees, event_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [name, description, start_date, end_date, registration_start_date, registration_end_date, no_of_team_member_min, no_of_team_member_max, fees, event_id]
    );

    // Send the added competition as the response
    res.status(201).json({ competition: result.rows[0] });
  } catch (error) {
    console.error("Error adding competition:", error);
    res.status(500).json({ error: "Error adding competition" });
  }
}


// Get Competitions of a Specific Event
async function getCompetitionsByEvent(req, res) {
  const { event_id } = req.params;

  try {
    // Query competitions of the specified event from the database
    const result = await pool.query(
      "SELECT * FROM competitions WHERE event_id = $1",
      [event_id]
    );

    // Send the list of competitions for the specific event as the response
    res.json({ competitions: result.rows });
  } catch (error) {
    console.error("Error fetching competitions for the event:", error);
    res.status(500).json({ error: "Error fetching competitions for the event" });
  }
}

module.exports = {
  addCompetition,
  getCompetitionsByEvent,
};
