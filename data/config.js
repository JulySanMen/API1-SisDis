const mongoose = require('mongoose');
const connecDB = async ()=>{
    const URL = 'mongodb://admin:password@localhost:27017/';
    try{
        await mongoose.connect(URL);
        console.log('Base de daros en ejecucion');
    }catch(error){
        console.error("No es posible conectar con la Base de Datos");
        console.error(error);
    }
}

module.exports = {connecDB};