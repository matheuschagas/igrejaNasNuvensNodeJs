let db = require("../../db");

exports.get = function (idDate, idInscrito) {
    return new Promise((resolve)=>{
        const sql = 'SELECT * FROM presenca WHERE inscricao_id = '+idInscrito+' AND dataEvento_id=' + idDate;
        console.log(sql);
        db.get().query((sql), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};


exports.set = function (idDate, idInscrito) {
    return new Promise((resolve)=>{
        const sql = 'INSERT INTO presenca(inscricao_id, dataEvento_id) VALUES('+idInscrito+', '+idDate+')';
        console.log(sql);
        db.get().query((sql), function (err, rows, fields) {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

exports.delete = function (idDate, idInscrito) {
    return new Promise((resolve)=>{
        const sql = 'DELETE FROM presenca WHERE inscricao_id = '+idInscrito+' AND dataEvento_id=' + idDate;
        console.log(sql);
        db.get().query((sql), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};