const { Client } = require("pg");

const db = new Client({
  connectionString: "postgres://localhost/scratch"
});

db
  .connect()
  .then(() => console.log("Connected to DB."))
  .catch(err => console.error("DB: Connecction error ", err.stack));

db
  .query(
    "CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, username VARCHAR(256), password VARCHAR(256));"
  )
  .then(() => console.log("User table confirmed."))
  .catch(err => console.error(err.stack));

module.exports = db;
