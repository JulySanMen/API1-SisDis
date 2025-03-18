const {crearJuegos, editarJuegos, buscarScore} = require('../service/juegosService');


const crearJuegosController = async (req, res) =>{
    const {name, year, company, score} = req.body;
    const newJuego = await crearJuegos(name, year, company, score);
    if(newJuego){
        res.json(newJuego);
    }else{
        res.status(500).json({error:'No es posible crear el juego'});
    }
}

const editarJuegosController = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    const juegoeditar = await editarJuegos(id, data);
    if(juegoeditar){
        res.json(juegoeditar);
    }else{
        res.status(500).json({error:juegoeditar.error})
    }
}


const buscarScoreController = async (req, res)=>{
    const score = require.params;
    const juegoscore = await buscarScore(score);
    if(juegoscore){
        res.json(juegoscore);
    }else {
        res.status(500).json({error:juegoscore.error});
    }
}
module.exports = {crearJuegosController, editarJuegosController, buscarScoreController};