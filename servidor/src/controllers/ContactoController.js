const Contacto = require('../models/Contacto');
const ContactoController = {};

ContactoController.index = async (req, res) => {
    const contactos = await Contacto.get();
    res.json(contactos);

}

ContactoController.show = async (req, res) => {
    const data = await Contacto.find(req.params.id);
    const contacto = data[0];
    res.json(contacto);

}

ContactoController.store = async (req, res) => { 
    const data = req.body.contacto;
    await Contacto.create(data);
    res.json({msg: "contacto anadido o agregado"});

}

ContactoController.update = async (req, res) => {
    const {nombre, celular, email, mensaje} = req.body.contacto;
    const {id} = req.body.contacto;
    await Contacto.update(id, {nombre, celular, email, mensaje});
    res.json({msg: "contacto actualizado exitosamente"});

}

ContactoController.destroy = async (req, res) => {
    const {id} = req.params.id; 
    await Contacto.delete(id);
    res.json({msg: "contacto borrado exitosamente"});

}

module.exports = ContactoController;