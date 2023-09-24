const express = require("express");
const router = express.Router();

const competitionRoute = require("./routes/competition/competitionRoute");

router.use("/competition", competitionRoute); //for admin use

module.exports = router;
