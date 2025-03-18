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
        const juegoeditar = await juegosModel.findByIdAndUpdate(id, data, {new:true});
        if(juegoeditar){
            return juegoeditar;
        }else{
            return ({error:'No es posible encontrar el juego'});
        }
    }catch(error){
        console.error(error);
       return ({error:error});
    }
}
//Buscar por Score 
const buscarScore = async (score)=>{
    try{
        const juegoscore = await juegosModel.find({score})
        if(juegoscore){
            return juegoscore;
        }else{
            return({error:'No es posible encontrar el Score'});
        }
    }catch(error){
        console.error(error);
        return({error:error});
    }
}

//Buscar por Nombre 
//
module.exports = {crearJuegos, editarJuegos, buscarScore};