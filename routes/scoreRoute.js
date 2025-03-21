const {crearScoreController, editarScoreController, buscarScoreController, 
    buscarNiknameController, buscarVideogameController, buscarTodoController, 
    eliminarScoreController} = require ('../Controller/scoreController');

const router = require('express').Router();

router.post('/crearScore', crearScoreController);
router.put('/editar/:id', editarScoreController);
router.get('/buscar/:score', buscarScoreController);
router.get('/buscarNikname/:nikname', buscarNiknameController);
router.get('/buscarTodo', buscarTodoController);
router.get('/buscarVideogame/:videogame', buscarVideogameController);
router.delete('/eliminar/:id', eliminarScoreController);

module.exports = router;