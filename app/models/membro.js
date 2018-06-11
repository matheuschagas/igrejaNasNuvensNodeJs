let db = require("../../db");

exports.getPais = function (ids, callbackSuccess, callbackError) {
    try {
        let sqlCondition = '';
        for(let i = 0; i < ids.length; i++){
            if(i===0){
                sqlCondition += ' WHERE id = ' + ids[i];
            }else{
                sqlCondition += ' OR id = ' + ids[i];
            }
        }
        db.get().query(('SELECT * FROM membro'+sqlCondition), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    let pais = [];
                    for(let i=0; i < rows.length; i++){
                        pais.push(JSON.parse(JSON.stringify(rows[i])));
                    }
                    // execute the callback, passing parameters as necessary
                    callbackSuccess(pais);
                }
            } else {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    // execute the callback, passing parameters as necessary
                    callbackSuccess(JSON.parse('{"error": true}'));
                }
            }
        });
    }catch (e){
        if (callbackError && typeof(callbackError) === "function") {
            // execute the callback, passing parameters as necessary
            callbackError(e);
        }
    }
};

exports.get = function (ids, callbackSuccess, callbackError) {
    try {
        let sqlCondition = '';
        for(let i = 0; i < ids.length; i++){
            if(i===0){
                sqlCondition += ' WHERE id = ' + ids[i];
            }else{
                sqlCondition += ' OR id = ' + ids[i];
            }
        }
        db.get().query(('SELECT * FROM membro'+sqlCondition), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    let pais = [];
                    for(let i=0; i < rows.length; i++){
                        pais.push(JSON.parse(JSON.stringify(rows[i])));
                    }
                    // execute the callback, passing parameters as necessary
                    callbackSuccess(pais);
                }
            } else {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    // execute the callback, passing parameters as necessary
                    callbackSuccess(JSON.parse('{"error": true}'));
                }
            }
        });
    }catch (e){
        if (callbackError && typeof(callbackError) === "function") {
            // execute the callback, passing parameters as necessary
            callbackError(e);
        }
    }
};