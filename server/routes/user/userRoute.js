const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user/userController");

// Add a new user
router.post("/add", userController.addUser);

// Get all users based on team ID
router.get("/all/:team_id", userController.getUsersByTeam);

module.exports = router;
