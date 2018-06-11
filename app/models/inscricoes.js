var db = require("../../db");

exports.get = function (id, callbackSuccess, callbackError) {
    try {
        db.get().query(('SELECT nomeCompleto, email FROM inscricao WHERE status=\'approved\' AND evento_id = ' + id), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    console.log(rows);
                    callbackSuccess(rows);

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