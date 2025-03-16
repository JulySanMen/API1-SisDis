const {crearJuegosController, editarJuegosController} = require('../Controller/juegosController');

const router = require('express').Router();

router.post('/crearGame', crearJuegosController);
router.put('/editarGame', editarJuegosController);

module.exports = router;