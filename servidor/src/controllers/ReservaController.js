const Reserva = require('../models/Reserva');
const ReservaController = {};

ReservaController.index = async (req, res) => {
    const reservas = await Reserva.get();
    res.json(reservas);

}

ReservaController.show = async (req, res) => {
    const data = await Reserva.find(req.params.id);
    const reserva = data[0];
    res.json(reserva);

}

ReservaController.store = async (req, res) => { 
    const data = req.body.reserva;
    await Reserva.create(data);
    res.json({msg: "reserva anadida o agregada agregado"});

}

ReservaController.update = async (req, res) => {
    const {nombre, telefono, email, tipocliente, fechallegada, noches, tipohabitacion,npersonas,comentarios} = req.body.reserva;
    const {id} = req.body.reserva;
    await Reserva.update(id, {nombre, telefono, email, tipocliente, fechallegada, noches, tipohabitacion,npersonas,comentarios});
    res.json({msg: "reserva actualizada exitosamente"});

}

ReservaController.destroy = async (req, res) => {
    const {id} = req.params.id;
    await Reserva.delete(id);
    res.json({msg: "reserva borrada exitosamente"});

}

module.exports = ReservaController;