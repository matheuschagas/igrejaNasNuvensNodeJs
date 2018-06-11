var db = require("../../db");
var membroModel = require('./membro');

exports.get = function (id, callbackSuccess, callbackError) {
    try {
        db.get().query(('SELECT * FROM crianca WHERE id = ' + id), function (err, rows, fields) {
            if (rows && rows.length > 0) {
                if (callbackSuccess && typeof(callbackSuccess) === "function") {
                    console.log(JSON.stringify(rows[0]));
                    var crianca = JSON.parse(JSON.stringify(rows[0]));
                    var pai = null;
                    var mae = null;
                    var pais = [];
                    if(crianca.pai && crianca.pai !== null)
                        pais.push(crianca.pai);
                    if(crianca.mae && crianca.mae !== null)
                        pais.push(crianca.mae);
                    membroModel.getPais(pais, function (resultado){
                        crianca.pais = resultado;
                        delete crianca.pai;
                        delete crianca.mae;
                        // execute the callback, passing parameters as necessary
                        callbackSuccess(crianca);
                    });

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