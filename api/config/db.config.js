require("dotenv").config();
module.exports = {
  HOST: process.env.HOST, //127.0.0.1
  USER: "root",
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mysql",
  dialectOptions: {
    useUTC: false, // for reading from database
  },
  timezone: "+06:00", // for writing to database
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
