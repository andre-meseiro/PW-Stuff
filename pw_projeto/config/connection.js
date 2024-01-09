const mysql = require('mysql2');
const options = require('../config/options.json')

const connection = mysql.createConnection({
    host: options.mysql.host,
    user: options.mysql.user,
    password: options.mysql.password,
    database: options.mysql.database
});

module.exports.connect = function () {
    return connection;
}

module.exports.end = function () {
    connection.end();
}