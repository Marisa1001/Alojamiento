const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');


const routes = express.Router();

//login usuario
//login para el administrador
routes.post('/api/login', UsuarioController.login);

module.exports = routes;


