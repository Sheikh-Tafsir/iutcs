const express = require("express");
const router = express.Router();
const teamController = require("../../controllers/team/teamController");

// Add a new team
router.post("/add", teamController.addTeam);

// Get teams based on competition_id
router.get("/all/:competition_id", teamController.getTeamsByCompetition);

//update team points
router.post("/points/update", teamController.updateTeamsPoints);

module.exports = router;
