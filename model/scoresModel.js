const mongoose = require ('mongoose');

const scoreSchema = new mongoose. Schema({
    nikname:{type:String, required:true},
    score:{type:Number,requiered:true},
    videogame:{type:String,requiered:true},
})
const scoresModel = mongoose.model('score', scoreSchema);
module.exports = {scoresModel};