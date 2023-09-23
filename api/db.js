const dbConfig = require("./config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.dialect,
  host: dbConfig.HOST,
  logging: false,
  timezone: "+06:00",
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully connected to the database");
  } catch (error) {
    console.log("Error : ", error);
  }
};

module.exports = { sequelize, connectToDb };
