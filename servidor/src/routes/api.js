const express = require('express');
const ReservaController = require('../controllers/ReservaController');
const UsuarioController = require('../controllers/UsuarioController');
const ContactoController = require('../controllers/ContactoController');

const routes = express.Router();

//////////////////////////////
///////////para las reservas
///////////////////////////////// 

//devolver lista de reservas
routes.get('/api/get-reservas', ReservaController.index);

//tener una reserva
routes.get('/api/get-reserva/:id', ReservaController.show);

//crear reserva
routes.post('/api/store-reserva', ReservaController.store);

//actualizar reserva
routes.post('/api/update-reserva', ReservaController.update);

//borrar reserva
routes.delete('/api/delete-reserva/:id', ReservaController.destroy);



///para el ususario que es el administrador del alojamiento
//crear usuario
routes.post('/api/store-usuario', UsuarioController.store);
//login usuario


//////////////////////////
///para el contacto
////////////////////////////


//devolver lista de contactos
routes.get('/api/get-contactos', ContactoController.index);

//tener un contacto
routes.get('/api/get-contacto/:id', ContactoController.show);

//crear contacto
routes.post('/api/store-contacto', ContactoController.store);

//actualizar contacto
routes.post('/api/update-contacto', ContactoController.update);

//borrar contacto
routes.delete('/api/delete-contacto/:id', ContactoController.destroy);


module.exports = routes;


