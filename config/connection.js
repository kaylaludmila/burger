
/ var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    },
    jawsDB: {
        port: 3306,
        host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'yq8ffbegvy22igma',
        password: "o3yh4aklr0ynr9zz",
        database: "gdrso0xua343sf1k"
    }
}

var connection = mysql.createConnection(source.jawsDB);



// var mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burger_db'
// 	});
// };





// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burger_db'
// 	});
// };






// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burger_db'
// });


// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

connection.connect();
module.exports = connection;








// var mysql = require('mysql');

// var source = {

//     localhost: {
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'burger_db'
//     },
//     jawsDB: {
//         port: 3306,
//         host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         user: 'yq8ffbegvy22igma',
//         password: "o3yh4aklr0ynr9zz",
//         database: "gdrso0xua343sf1k"
//     }
// }

// var connection = mysql.createConnection(source.jawsDB);


// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;

