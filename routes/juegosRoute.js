const {crearJuegosController, editarJuegosController, buscarScoreController, buscarNombreController, buscarTodoController} = require('../Controller/juegosController');

const router = require('express').Router();

router.post('/crearGame', crearJuegosController);
router.put('/editarGame/:id', editarJuegosController);
router.get('/buscarScore/:score', buscarScoreController);
router.get('/buscarNombre/:name', buscarNombreController);
router.get('/buscarTodo', buscarTodoController);

module.exports = router;