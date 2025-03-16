const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name:{type:String, requiered:true},
    year:{type:Number,requiered:true},
    company:{type:String,requiered:true},
    score:{type:Number,requiered:true}
})

const juegosModel = mongoose.model('juegos', Schema);
module.exports = {juegosModel};