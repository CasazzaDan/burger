var connection = require("./connection");

//SQL query syntax helper
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Object key/value pairs to SQL syntax function
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        // check for hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
// SQL statement functions
var orm = {
    // Select all burgers in the DB
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // Create a new burger object to add to the DB
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // Update a burger object in the DB
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + tables;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;