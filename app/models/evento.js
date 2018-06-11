let db = require("../../db");

getData = (date) => {
    return date.toLocaleDateString();
};

exports.getDateID = function (date, evento) {
    return new Promise((resolve)=>{
        const sql = 'SELECT id FROM dataEvento where evento_id='+evento+' AND data=\''+ getData(date) +"'";
        db.get().query((sql), function (err, rows, fields) {
        if (rows && rows.length > 0) {
            resolve(rows[0].id);
        } else {
            resolve(false);
        }
    });
});
};