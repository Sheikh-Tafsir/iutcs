const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");

const baseRoutes = require("./baseRoutes");
const cookieParser = require("cookie-parser");
const moment = require("moment-timezone");

moment.tz.setDefault("Asia/Dhaka");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("uploads"));
// Configure session middleware
// app.use(
//   session({
//     secret:process.env.SECRET_TOKEN,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }, // Adjust options based on your requirements
//   })
// );
// Use base routes
app.use("/api/v1", baseRoutes);

//simple route for testing
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await connectToDb();
});
