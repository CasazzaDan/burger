// Requirer MySQL
var mysql = require("mysql");

// Create object for connection info
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Start connection
connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected as ID: " + connection.threadId);
});

// Export the connection to be use in ORM
module.exports = connection;