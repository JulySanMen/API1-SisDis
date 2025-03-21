const {scoresModel} = require('../model/scoresModel');
const {juegosModel} = require('../model/juegosModel');
const {usersModel} = require('../model/usersModel');

//Crear Score
const crearScore = async (nikname,score,videogame)=>{
    try{
        const juego = await juegosModel.findOne({name:videogame});
        const user = await usersModel.findOne({nikname:nikname});
        if (juego && user){
            const newScore = new scoresModel({nikname,score,videogame});
            const saveScore = await newScore.save();
            if(saveScore){
                return saveScore;
            }else{
                return({error:"No se pudo guardar el Score"});
            }
        }else{
            return ({error:"No se encontro el videojuego o el usuario"});
        }
    }catch(error){
        console.error(error);
        return null;
    }
}

//Editar
const editarScore = async (id, data)=>{
    try{
        const score = await scoresModel.findByIdAndUpdate(id, data,{new:true});
        if(score){
            return score;
        }else{
            return({error:"No se puede encontrar al usuario"});
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
    
}

//Buscar ppor Score
const buscarScore = async (score)=>{
    try{
        const buscore= await scoresModel.find({score:score});
        if(buscore){
            return buscore;
        }else{
            return({error:"No es posible encontrar el score "})
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
}

//Buscar por Nikname
const buscarNikname = async (nikname)=>{
    try{
        const scoreNikname = await scoresModel.find({nikname:nikname});
        if(scoreNikname){
            return scoreNikname;
        }else{
            return({error:"No es posible encontrar el nikname"});
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
}

//Buscar por Videojuego
const buscarVideogame = async (videogame)=>{
    try{
        const scoreVideogame = await scoresModel.find({videogame:videogame});
        if(scoreVideogame){
            return scoreVideogame;
        }else{
            return({error:"No es posible encontrar el videojuego"});
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
}

//BuscarTodo
const buscarTodo = async()=>{
    try{
        const scores = await scoresModel.find();
        if(scores){
            return scores;
        }else{
            return({error:"No existen los scores "})
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
}


//Eliminar 
const eliminarScore = async(id)=>{
    try{
        const scoreEliminar = await scoresModel.findByIdAndDelete(id);
        if(scoreEliminar){
            return({message:"Se elimino el score"});
        }else{
            return({error:"No es posible borrar el score"});
        }
    }catch(error){
        console.log(error);
        return({error:error});
    }
}

module.exports = {crearScore,editarScore,buscarScore,buscarNikname,buscarVideogame,buscarTodo,eliminarScore};