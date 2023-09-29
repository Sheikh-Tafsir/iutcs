const express = require("express");
const app = express();
const pool = require("./db"); // Adjust the path if needed.
const cors = require("cors");
const baseRoutes = require("./baseRoutes");
require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var corsOptions = {
  origin: process.env.CORS_ALLOWED_ORIGINS || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add the HTTP methods you need
  allowedHeaders: ["Content-Type", "Authorization"], // Add the headers you want to allow
};

// Then use corsOptions in your CORS middleware setup
app.use(cors(corsOptions));

app.use(express.json());

// Swagger documentation options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "A sample API documentation",
    },
    servers: [
      {
        url: "http://localhost:3001", // Replace with your server URL
      },
    ],
  },
  apis: ["index.js", "routes/inventory.js"], // Replace with the path to your server file (index.js in this case)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define a simple route to respond with "Hello, world!".
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//app.use("/api/v1", baseRoutes);
app.use("/blog", require("./routes/blog/blogRoute"));
app.use("/competition", require("./routes/competition/competitionRoute"));
app.use("/event", require("./routes/event/eventRoute"));
app.use("/team", require("./routes/team/teamRoute"));
app.use("/user", require("./routes/user/userRoute"));

// Start the server on a specific port (e.g., 3000).
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
