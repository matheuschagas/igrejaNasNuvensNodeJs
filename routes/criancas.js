var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'txq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306',
    user     : 'i3bfv8b1pmwoccmu',
    password : 'fhzbwy37u30ve3b7'
});

/* GET child listing. */
router.get('/', function(req, res, next) {
    res.send('criancas');
});

/* Retrieves a specific child. */
router.get('/:id', function(req, res, next) {
    try{
        var id = parseInt(req.params["id"]);
        var child = {};
        connection.connect();

        connection.query(('SELECT * FROM uzok7wxxavgpka7x.crianca WHERE id = ' + id), function(err, rows, fields) {
            console.log(err);
            child = rows;
        });

        connection.end();
        res.send({'crianca':child});
    }catch (e){
        console.log(e);
        res.send('error');
    }
});

/* Creates a new child. */
router.post('/', function(req, res, next) {
    res.send('criancas');
});

/* Updates child #:id. */
router.put('/:id', function(req, res, next) {
    res.send('criancas');
});

/* Partially updates child #:id. */
router.patch('/:id', function(req, res, next) {
    res.send('criancas');
});

/* Deletes child #:id. */
router.delete('/:id', function(req, res, next) {
    res.send('criancas');
});



module.exports = router;
