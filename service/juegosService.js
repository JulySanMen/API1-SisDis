const {juegosModel} = require('../model/juegosModel');

//Crear Juegos 
const crearJuegos = async (name, year, company, score)=>{
    try{
        const newJuego = new juegosModel({name, year, company, score});
        const saveJuego = await newJuego.save();
        return saveJuego;
    }catch(error){
        console.error(error);
        return null;
    }
}


//Editar
const editarJuegos = async (id, data)=>{
    try{
        const juegoeditar = await editJuegos.findByIdAndUpdate(id, data);
        if(juegoeditar){
            return juegoeditar;
        }else{
            return ({error:'No es posible encontrar el juego'});
        }
    }catch(error){
       return ({error:'No es posible editar el juego'});
    }
}
//Buscar por Score 
//Buscar por Nombre 
//
module.exports = {crearJuegos, editarJuegos};