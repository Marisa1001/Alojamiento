const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const UsuarioController = {};

UsuarioController.index = async (req, res) => {
    const usuarios = await Usuario.get();
    res.json(usuarios);

}

UsuarioController.show = async (req, res) => {
    const data = await Usuario.find(req.params.id);
    const usuario = data[0];
    res.json(usuario);

}

UsuarioController.store = async (req, res) => {
    const data = req.body;
    await Usuario.create(data);
    res.json({msg: "usuario agregado exitosamente"});

}

UsuarioController.login = async (req, res) => {
    const data = req.body;
    const usuario = await Usuario.singin(data);
    if (usuario.length > 0) {
        const encryptData = {
            data: usuario[0]
        }
        jwt.sign(encryptData, 'secret', { expiresIn: '12h' }, (err, token) => {
            if (!err) {
                res.status(200).json({
                    usuario: usuario[0],
                    token
                });
            }
        })
    }
    else {
        res.status(401).json({msg: 'credenciales incorrectas'})
    }
}

UsuarioController.update = async (req, res) => {
    const {nombre, apellido, tipo} = req.body.usuario;
    const {id} = req.body.usuario;
    await Usuario.update(id, {nombre, apellido, tipo});
    res.json({msg: "usuario actusalizado exitosamente"});

}

UsuarioController.destroy = async (req, res) => {
    const {id} = req.params.id;
    await Usuario.delete(id);
    res.json({msg: "usuario borrado exitosamente"});

}

module.exports = UsuarioController;