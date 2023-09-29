const express = require("express");
const router = express.Router();
const competitionController = require("../../controllers/competition/competitionController");

// Add a new competition
router.post("/add", competitionController.addCompetition);

// Get all competitions
router.get("/all/:event_id", competitionController.getCompetitionsByEvent);

module.exports = router;
