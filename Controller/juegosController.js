const {crearJuegos, editarJuegos, buscarNombre, buscarTodo, eliminarJuego} = require('../service/juegosService');


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

const buscarNombreController = async (req, res)=>{
    const {name} = req.params;
    const juegoName = await buscarNombre(name);
    if(juegoName){
        res.json(juegoName);
    }else{
        res.status(500).json({error:juegoName.error});
    }
}

const buscarTodoController = async (req, res)=>{
    const juegos = await buscarTodo();
    if(juegos){
        res.json(juegos);
    }else{
        res.status(500).json({error:juegos.error});
    }
}

const eliminarJuegoController = async(req, res)=>{
    const {id} =  req.params;
    const juegoEliminar = await eliminarJuego(id);
    if(juegoEliminar.message){
        res.json({message:'Juego eliminado'});
    }else{
        res.status(500).json({error:juegoEliminar.error});
    }
}
module.exports = {crearJuegosController, editarJuegosController, buscarNombreController, buscarTodoController, eliminarJuegoController};