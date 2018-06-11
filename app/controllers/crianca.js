var express = require('express');
var router = express.Router();
var criancaModel = require('../models/crianca');

/* GET child listing. */
router.get('/', function(req, res, next) {
    res.send('criancas');
});

/* Retrieves a specific child. */
router.get('/:id', function(req, res, next) {
    try{
        var id = parseInt(req.params["id"]);
        criancaModel.get(id, function (result) {
            res.json(result);
        }, function (error) {
            throw error;
        });
    }catch (e){
        console.log(e);
        res.json({'error': true});
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
