const express = require('express');
const cors = require('cors');
const juegosRoute = require('./routes/juegosRoute');
const scoreRoute = require('./routes/scoreRoute');
const {connecDB} = require('./data/config');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
connecDB();

app.use('/juegos', juegosRoute);
app.use('/score', scoreRoute);
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http:localhost:' +PORT );
})


