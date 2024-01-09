const connection = require('../config/connection');
const mysql = require('mysql2')

module.exports.validateLogin = function (callback, email, password) {
    connection.connect().query(mysql.format("call sp_getLogin(?,?)", [email, password]), function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });
}

module.exports.getLoginType = function (callback, login) {
    connection.connect().query(`select fn_GetLoginType(${login}) as login_type`, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

