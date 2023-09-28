const express = require("express");
const router = express.Router();
const eventController = require("../../controllers/event/eventController");

// Get all events
router.get("/all", eventController.getAllEvents);

// Create a new event
router.post("/create", eventController.createEvent);

module.exports = router;
