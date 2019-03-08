// Requirer MySQL
var mysql = require("mysql");

// Create object for connection info
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

// Start connection
connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected as ID: " + connection.threadId);
});

// Export the connection to be use in ORM
module.exports = connection;