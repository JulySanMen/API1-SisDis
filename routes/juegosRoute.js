const {crearJuegosController, editarJuegosController, buscarNombreController, buscarTodoController, eliminarJuegoController} = require('../Controller/juegosController');

const router = require('express').Router();

router.post('/crearGame', crearJuegosController);
router.put('/editarGame/:id', editarJuegosController);
router.get('/buscarNombre/:name', buscarNombreController);
router.get('/buscarTodo', buscarTodoController);
router.delete('/eliminarGame/:id', eliminarJuegoController);

module.exports = router;