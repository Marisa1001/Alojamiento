const mysql = require('mysql');
const {promisify} = require('util');
// la respuesta de la base de datos demora es una promesa
//asincronia se ve en esta parte
const {database} = require('./keys');

//hacer una nueva conexion
const pool = mysql.createPool(database);

pool.getConnection( (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOLL CONNECTION_LOST'){
            console.error('La conexion se a perdido');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Existen demasiadas conexiones');
        }
        if (err.code === 'ENCONNREFUSED'){
            console.error('Conexion rechazada');
        }
    }
    if (connection) {
        connection.release();
    }

    console.log('Conectado a la base de datos');
});

//transformar las peticiones a promesas
pool.query = promisify(pool.query);

//exportamos todo
module.exports = pool;
