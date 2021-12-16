//archivo que se ejecuta
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {json} = require('express');
const cors = require('cors');
const {verifyToken} = require('./middleware/auth');

const app = express();

app.use(morgan('dev'));

//peticiones en formato json
app.use(json());
app.use(cors());

//utilizar rutas

//solo dar el nombre sin extencion solo nombre de carpeta
app.use(require('./routes/api-notoken'));

app.use(verifyToken);
app.use(require('./routes/api'));


//hacer public a la carpeta public
app.use(express.static(path.join(__dirname, 'public')));



//ejecutar del servidor
app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('Servidor ejecutandose');
})