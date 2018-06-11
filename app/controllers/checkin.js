let express = require('express');
let router = express.Router();
let participantes = require('../models/participantes');
const evento = require('../models/evento');

/* GET child listing. */
/* Retrieves a specific child. */
router.get('/:id', async (req, res, next) => {
    try{
        let id = parseInt(req.params["id"]);
        const idInscrito = req.query.inscrito;
        if(idInscrito){
            let today = new Date();
            const eventoDataID = await evento.getDateID(today, id);
            if(eventoDataID){
                let checkinEfetuado = await participantes.get(eventoDataID, idInscrito);
                let motivo = '';
                if(!checkinEfetuado){
                    await participantes.set(eventoDataID, idInscrito);
                    motivo = 'Checkin efetuado com sucesso!';
                }else{
                    motivo = 'O Participante já fez checkin no evento, deseja registrar sua saída?';
                }
                res.json({'success': !checkinEfetuado, motivo});
            }else{
                res.json({'error': true, 'reason': 'Hoje não é o dia do evento'});
            }
        }else{
            res.json({'error': true});
        }
    }catch (e){
        console.log(e);
        res.json({'error': true});
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        let id = parseInt(req.params["id"]);
        const idInscrito = req.query.inscrito;
        if(idInscrito){
            let today = new Date();
            const eventoDataID = await evento.getDateID(today, id);
            if(eventoDataID){
                let deleted = await participantes.delete(eventoDataID, idInscrito);
                let motivo = '';
                if(deleted){
                    motivo = 'Checkout realizado com sucesso!';
                }else{
                    motivo = 'Erro ao realizar Checkout, tente mais tarde';
                }
                res.json({'success': deleted, motivo});
            }else{
                res.json({'error': true, 'reason': 'Hoje não é o dia do evento'});
            }
        }else{
            res.json({'error': true});
        }
    }catch (e){
        console.log(e);
        res.json({'error': true});
    }
});



module.exports = router;
