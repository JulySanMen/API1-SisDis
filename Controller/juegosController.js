const {crearJuegos, editarJuegos} = require('../service/juegosService');


const crearJuegosController = async (req, res) =>{
    const {name, year, company, score} = req.body;
    const newJuego = await crearJuegos(name, year, company, score);
    if(newJuego){
        res.json(newJuego);
    }else{
        res.status(500).json({error:'No es posible crear el juego'});
    }
}

const ediatrjuegosController = async (req,res)=>{
    const {name, year, company, score} = req.body;
    const juegoeditar = await ediatrjuegosController(name, year, company, score);
    if(juegoeditar){
        res.json(juegoeditar);
    }else{
        res.status(500).json({error:'Noes posible editar el juego'})
    }
}

module.exports = {crearJuegosController, editarJuegosController};