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
const editarJuegos = async (name, year, company, score)=>{
    try{
        const juegoedit = await juegosModel.findByIdAndUpdate(id, {name, year, company, score});
        return juegoedit;
    }catch(error){
        console.error(error);
        return null;
    }
}
//Buscar por Score 
//Buscar por Nombre 
//
module.exports = {crearJuegos, editarJuegos};