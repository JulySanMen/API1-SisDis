const mongoose = require ('mongoose');

const usersSchema = new mongoose. Schema({
    nikname:{type:String, required:true},
    nacionalidad:{type:String, required:true},
})
const usersModel = mongoose.model('users', usersSchema);
module.exports = {usersModel};