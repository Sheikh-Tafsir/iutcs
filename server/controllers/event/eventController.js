const pool = require("../../db"); // Import the pool object from your db.js file

// Get all events
async function getAllEvents(req, res) {
  try {
    // Query all events from the database
    const result = await pool.query("SELECT * FROM events");
    // Send the list of events as the response
    res.json({ events: result.rows });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Error fetching events" });
  }
}

// Create a new event
async function createEvent(req, res) {
  const { name, startdate, endDate, events_details, event_type } = req.body;
  try {
    // Insert the new event into the database
    const result = await pool.query(
      "INSERT INTO events (name, startdate, enddate, events_details, event_type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, startdate, endDate, events_details, event_type]
    );
    // Send the newly created event as the response
    res.status(201).json({ event: result.rows[0] });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Error creating event" });
  }
}

module.exports = {
  getAllEvents,
  createEvent,
};
