const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const conectarDB = require("./database");

const app = express();

// conectar a la base de datos
conectarDB;

// settings
app.set('port', config.app.port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
app.use('/api/usuarios', require('./routers/usuarios.routers'));
app.use('/api/deportes', require('./routers/deportes.routers'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`servidor iniciado en puerto ${app.get('port')}`)
});
