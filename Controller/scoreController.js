const {crearScore,editarScore, buscarScore, buscarNikname, buscarVideogame, buscarTodo, eliminarScore } = require('../service/scoreService');

const crearScoreController = async (req, res) => {
    const { nikname, score, videogame } = req.body;
    const newScore = await crearScore(nikname, score, videogame);
    if (newScore) {
        res.json(newScore);
    } else {
        res.status(500).json({ error: "NO es posible crear el Score" })
    }
}

const editarScoreController = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const scoreEditar = await editarScore(id, data);
    if (scoreEditar) {
        res.json(scoreEditar);
    }
}

const buscarScoreController = async (req, res) => {
    const {score} = req.params;
    const scorebus = await buscarScore(score);
    if (scorebus) {
        res.json(scorebus);
    } else {
        res.status(500).json({ error: "No es posible encontrar el score" })
    }
}

const buscarNiknameController = async (req, res) => {
    const { nikname } = req.params;
    const scoreNikname = await buscarNikname(nikname);
    if (scoreNikname) {
        res.json(scoreNikname);
    } else {
        res.status(500).json({ error: "No es posible encontrar al usuario" });
    }
}

const buscarTodoController = async (req, res) => {
    const scores = await buscarTodo();
    if (scores) {
        res.json(scores);
    } else {
        res.status(500).json({ error: "No es posible encontrar usuarios" });
    }
}

const buscarVideogameController = async(req,res)=>{
    const {videogame} = req.params;
    const scoreVideogame = await buscarVideogame(videogame);
    if(scoreVideogame){
        res.json(scoreVideogame);
    }else{
        res.status(500).json({error:"No es posible encontrar el videojuego"})
    }
}

const eliminarScoreController = async (req, res)=>{
    const {id} = req.params;
    const scoreEliminar = await eliminarScore(id);
    if(scoreEliminar){
        res.json({message:"Score Eliminadao"});
    }else{
        res.status(500).json({error:"No es posible eliminar el usuario"})
    }
}

module.exports = {crearScoreController, editarScoreController, buscarScoreController, buscarNiknameController, buscarVideogameController, buscarTodoController, eliminarScoreController};