const {juegosModel} = require('../model/juegosModel');

//Crear Juegos 
const crearJuegos = async (name, year, company)=>{
    try{
        const newJuego = new juegosModel({name, year, company});
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

//Buscar por Nombre 
const buscarNombre =  async (name)=>{
    try{
        const juegoName = await juegosModel.find({name:name});
        if(juegoName){
            return juegoName;
        }else{
            return({error:'No es posible encontrar el nombre'});
        }
    }catch(error){
        console.error(error);
        return({error:error});
    }
}
//buscar todo 
const buscarTodo = async ()=>{
    try{
        const juegos = await juegosModel.find();
        if(juegos){
            return juegos;
        }else{
            return({error:'No es posible encontrar los juegos'});
        }
    }catch(error){
        console.error(error);
        return({error:error});
    }
}

//Eliminar 
const eliminarJuego = async (id)=>{
    try{
        const juegoEliminar = await juegosModel.findByIdAndDelete(id);
        if(juegoEliminar){
            return ({message:"se elimino el juego"})
        }
    }catch(error){
        console.error(error);
        return({error:error});
    }
}

module.exports = {crearJuegos, editarJuegos, buscarNombre, buscarTodo, eliminarJuego};