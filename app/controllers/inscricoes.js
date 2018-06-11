let express = require('express');
let router = express.Router();
let inscricoesModel = require('../models/inscricoes');

/* GET child listing. */
router.get('/', function(req, res, next) {
    res.send('inscricoes');
});

/* Retrieves a specific child. */
router.get('/:id', function(req, res, next) {
    try{
        let id = parseInt(req.params["id"]);
        inscricoesModel.getAll(id, function (result) {
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
    res.send('inscricoes');
});

/* Updates child #:id. */
router.put('/:id', function(req, res, next) {
    res.send('inscricoes');
});

/* Partially updates child #:id. */
router.patch('/:id', function(req, res, next) {
    res.send('inscricoes');
});

/* Deletes child #:id. */
router.delete('/:id', function(req, res, next) {
    res.send('inscricoes');
});



module.exports = router;
