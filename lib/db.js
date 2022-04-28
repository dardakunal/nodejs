var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'wp-db.cydictq37o46.us-east-1.rds.amazonaws.com',
    user: 'test',
    password: 'test123#',
    database: 'customers'
});
connection.connect(function (error) {
    if (!!error) {
        console.log("err is ",error);
    } else {
        console.log('Connected!:)');
    }
});
module.exports = connection; 
