const db = require("../models/database");

const userController = {};

let userTaken = false;
userController.newUser = data => {
  db
    .query(`SELECT * FROM users WHERE username = '${data.body.username}'`)
    .then(data2 => userTaken = data2.rows.length > 0)
    .then(() => {
      if (!userTaken) {
        db
          .query("INSERT INTO users (username, password) VALUES ($1, $2)", [
            data.body.username,
            data.body.password
          ])
          .then(() => console.log("new user created"))
          .catch(err => console.error(err.stack));
      } else console.log('Username taken.')
    });
};

module.exports = userController;
