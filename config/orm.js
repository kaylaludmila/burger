var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, req, cb){
        var queryString = 'INSERT INTO ' + tableInput + ' (' + colName + ') VALUES (?)';

        connection.query(queryString, req, function(err, result) {
            cb(result);
        });
    },
    updateOne: function(tableInput, colName, req, cb){
        var queryString = 'UPDATE ' + tableInput + ' SET ' + colName + '= 1 WHERE id=?';

        connection.query(queryString, req, function(err, result) {
            cb(result);
        });
    },
};

module.exports = orm;
