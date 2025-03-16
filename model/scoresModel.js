const mongoose = require ('mongoose');

const scoreSchema = new mongoose. Schema({
    nikname:{type:String, required:true},
    score:{type:Number, required:true},
    videogame:{type:String, required:true}
})
const scoreModel = mongoose.model('score', scoreSchema);
module.exports = {scoreModel};