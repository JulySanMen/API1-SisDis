const {crearJuegosController, editarJuegosController, buscarScoreController} = require('../Controller/juegosController');

const router = require('express').Router();

router.post('/crearGame', crearJuegosController);
router.put('/editarGame/:id', editarJuegosController);
router.get('/buscarScore/:score', buscarScoreController);

module.exports = router;