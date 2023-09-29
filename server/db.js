require('dotenv').config();

const { Pool } = require('pg');
const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}?sslmode=require`;
const pool = new Pool({
  // connectionString: connectionString,
  connectionString: "postgres://default:F6od2DfziWqO@ep-floral-block-66096016-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb" + "?sslmode=require",
    ssl: false,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = pool;