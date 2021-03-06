// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "amy",
  password: "Password",
  database: "new_burger_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

// Export connection for our ORM to use.
module.exports = connection;
