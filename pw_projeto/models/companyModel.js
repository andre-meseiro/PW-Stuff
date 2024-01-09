const connection = require('../config/connection');
const mysql = require('mysql2');
const proModel = require('./professionalModel')

module.exports.createCompany = function (callback, data) {
    connection.connect().query(mysql.format("insert into login (email,password) values (?,?)", [data.email, data.palavrapasse]));
    connection.connect().query(`insert into company values (last_insert_id(),null,?,?,?,?,true);`,
        [data.nome, data.descricao, data.urlsite, data.urllogo]);
    connection.connect().query(`select login from company where companyID=last_insert_id()`, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports.readCompany = function (callback) {
    connection.connect().query(`select * from company`, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports.readCompanyPending = function (callback) {
    connection.connect().query(`select * from company where pending_approval=true`, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports.deleteCompany = function (callback, id) {
    connection.connect().query("delete from company where login=?", [id]);
    connection.connect().query("delete from login where loginID=?", [id], function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}

module.exports.updateCompanyStatus = function (callback, id) {
    connection.connect().query("update company set pending_approval=false where login=?", [id], function (error, results, fields) {
        if (error) throw error;
        callback();
    });
}