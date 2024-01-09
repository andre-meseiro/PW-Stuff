const connection = require('../config/connection');
const mysql = require('mysql2');

module.exports.createProfessional = function (callback, data) {
    connection.connect().query(mysql.format("insert into login (email,password) values (?,?)", [data.email, data.palavrapasse]));
    connection.connect().query(mysql.format("insert into professional values (last_insert_id(),null,?,?,?,?,?,?)",
        [data.nome, data.descricao, data.genero, data.datanasc, data.localidade, data.visto === "sim" ? true : false]));
    connection.connect().query("select login from professional where professionalID=last_insert_id()", function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports.readProfessionalByID = function (callback, id) {
    connection.connect().query(mysql.format("select * from professional where professionalID=?", [id]), function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports.readProfessionalByEmail = function (callback, email) {
    connection.connect().query(mysql.format("select p.login,p.professionalID,p.name,p.description,p.gender,p.birthDate,p.locality,p.visible from professional p join login l on l.loginID=p.login where l.email=?",
        [email]), function (error, results, fields) {
            if (error) throw error;
            callback(results);
        });
}

module.exports.readPortfolios = function (callback) {
    connection.connect().query(mysql.format("select * from professional"), function (error, results, fields) {
        if (error) throw error;
        let output = [];
        for (pro of results) {
            output.push({ professionalID: pro.professionalID, name: pro.name, gender: pro.gender, birthDate: pro.birthDate.getDate() + "-" + (pro.birthDate.getMonth() + 1) + "-" + pro.birthDate.getFullYear(), locality: pro.locality, description: pro.description })
        }
        appendEducation(callback, output);
    });
}

module.exports.readPortfoliosByID = function (callback, id) {
    connection.connect().query(mysql.format("select * from professional where login=?"), [id], function (error, results, fields) {
        if (error) throw error;
        let output = [];
        for (pro of results) {
            output.push({ professionalID: pro.professionalID, name: pro.name, gender: pro.gender, birthDate: pro.birthDate.getDate() + "-" + (pro.birthDate.getMonth() + 1) + "-" + pro.birthDate.getFullYear(), locality: pro.locality, description: pro.description, visible: pro.visible })
        }
        appendEducation(callback, output);
    });
}

module.exports.readPublicPortfolios = function (callback) {
    connection.connect().query(mysql.format("select * from professional where visible=true"), function (error, results, fields) {
        if (error) throw error;
        let output = [];
        for (pro of results) {
            output.push({ professionalID: pro.professionalID, name: pro.name, gender: pro.gender, birthDate: pro.birthDate.getDate() + "-" + (pro.birthDate.getMonth() + 1) + "-" + pro.birthDate.getFullYear(), locality: pro.locality, description: pro.description })
        }
        appendEducation(callback, output);
    });
};

function appendEducation(callback, data) {
    connection.connect().query(mysql.format(`select p.professional, place_of_education,name,type,average 
                                            from professional_education p 
                                            join education e on e.educationID = p.educationID`
    ), function (error, results, fields) {
        for (let portefolio of data) {
            portefolio.education = [];
            for (let result of results) {
                if (result.professional == portefolio.professionalID) {
                    portefolio.education.push(result)
                }
            }
        }
        appendWorkplace(callback, data);
    });
}

function appendWorkplace(callback, data) {
    connection.connect().query(mysql.format(`select pw.professional,w.name,w.url_logo,pw.functions_description,pw.date_start,pw.date_end
                                            from rede_portefolios.professional_workplace pw
                                            join workplace w on w.workplaceID=pw.proWorkID`
    ), function (error, results, fields) {
        for (let portefolio of data) {
            portefolio.workplace = [];
            for (let result of results) {
                if (result.professional == portefolio.professionalID) {
                    result.date_start = result.date_start.getDate() + "-" + (result.date_start.getMonth() + 1) + "-" + result.date_start.getFullYear();
                    result.date_end = result.date_end.getDate() + "-" + (result.date_end.getMonth() + 1) + "-" + result.date_end.getFullYear();
                    portefolio.workplace.push(result)
                }
            }
        }
        callback(data);
    });
}

module.exports.updateProfessional = function (callback, data) {
    connection.connect().query("update professional set name=?,description=?,gender=?,birthDate=?,locality=?,visible=? where login=?",
        [data.nome, data.descricao, data.genero, data.datanasc, data.localidade, data.visto === "sim" ? true : false, data.login],
        function (error, results, fields) {
            if (error) throw error;
            callback();
        });
}

module.exports.createProfessionalWorkplace = function (callback, data) {
    connection.connect().query("insert into workplace values(null, ?, ?)", [data.company, data.companyUrl]);
    connection.connect().query("select professionalID from professional where login=?", [data.login],
        function (error, results, fields) {
            if (error) throw error;
            connection.connect().query("insert into professional_workplace values(null, ?, last_insert_id(), ?, ?, ?)",
                [results[0].professionalID, data.descricao, data.datestart, data.dateend]);
        });
    callback();
}

module.exports.createProfessionalEducation = function (callback, data) {
    connection.connect().query("insert into education values(null, ?, ?,?)", [data.nameplace, data.name, data.type]);
    connection.connect().query("select professionalID from professional where login=?", [data.login],
        function (error, results, fields) {
            if (error) throw error;
            connection.connect().query("insert into professional_education values(?,last_insert_id(),?)",
                [results[0].professionalID, data.average]);
        });
    callback();
}