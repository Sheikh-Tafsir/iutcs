const express = require("express");
const router = express.Router();

const competitionRoute = require("./routes/competition/competitionRoute");
const blogRoute = require("./routes//blog/blogRoute");


router.use("/competition", competitionRoute); 
router.use("/blog", blogRoute);


module.exports = router;
