const pool = require("../../db"); // Import the pool object from your db.js file

// Add a new team
// async function addTeam(req, res) {
//   console.log(req.body.teamData);
//   const { team_name, competition_id, team_point, university_name, users } = req.body;

//   try {
//     // Start a transaction
//     await pool.query("BEGIN");

//     // Insert a new team into the database
//     const teamResult = await pool.query(
//       "INSERT INTO teams (team_name, competition_id, team_point, university_name) VALUES ($1, $2, $3, $4) RETURNING id",
//       [team_name, competition_id, team_point, university_name]
//     );

//     const teamId = teamResult.rows[0].id;

//     // Insert team members into the database
//     for (const user of users) {
//       const { name, email, studentId, contactInfo } = user;
//       await pool.query(
//         "INSERT INTO users (team_id, name, email, student_id, contact_info) VALUES ($1, $2, $3, $4, $5)",
//         [teamId, name, email, studentId, contactInfo]
//       );
//     }

//     // Commit the transaction
//     await pool.query("COMMIT");

//     // Send the added team as the response
//     res.status(201).json({ team: { id: teamId, team_name, competition_id, team_point, university_name, users } });
//   } catch (error) {
//     // Rollback the transaction on error
//     await pool.query("ROLLBACK");

//     console.error("Error adding team:", error);
//     res.status(500).json({ error: "Error adding team" });
//   } finally {
//     // Release the client from the pool
//     // Make sure to release the client even in case of an error
//     if (client) {
//       client.release();
//     }
//   }
// }

async function updateTeamsPoints(req, res) {
  //console.log(req.body);
  const { id, updatePoints } = req.body;
  try {
    // Update team_points in the database
    const updateResult = await pool.query(
      "UPDATE teams SET team_point = team_point + $1 WHERE id = $2 RETURNING *",
      [updatePoints, id]
    );

    // Check if the team was updated successfully
    if (updateResult.rows.length > 0) {
      const updatedTeam = updateResult.rows[0];
      res.status(200).json({ success: true, team: updatedTeam });
    } else {
      res.status(404).json({ success: false, message: 'Team not found' });
    }
  } catch (error) {
    console.error('Error updating team points:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }

}

async function addTeam(req, res) {
  console.log(req.body.teamData);
  const { team_name, competition_id, team_point, university_name, users } =
    req.body.teamData;

  try {
    // Insert a new team into the database
    const teamResult = await pool.query(
      "INSERT INTO teams (team_name, competition_id, team_point, university_name) VALUES ($1, $2, $3, $4) RETURNING id",
      [team_name, competition_id, team_point, university_name]
    );

    const teamId = teamResult.rows[0].id;

    // Insert team members into the database
    for (const user of users) {
      const { name, email, studentId, contactInfo } = user;
      await pool.query(
        "INSERT INTO users (team_id, name, email, student_id, contact_info) VALUES ($1, $2, $3, $4, $5)",
        [teamId, name, email, studentId, contactInfo]
      );
    }

    // Send the added team as the response
    res.status(201).json({
      team: {
        id: teamId,
        team_name,
        competition_id,
        team_point,
        university_name,
        users,
      },
    });
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
  updateTeamsPoints,
};
