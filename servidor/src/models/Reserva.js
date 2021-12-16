const db = require('../db');

const Reserva = {};

Reserva.get = async () => {
    return await db.query(`select * from reservas`);
}

Reserva.find = async (id) => {
    return await db.query(`select * from reservas where id=?` , [id]);
}

Reserva.create = async (data) => {
    return await db.query(`insert into reservas set ? `, [data]);
} 

Reserva.update = async (id, data) => {
    return await db.query(`update reservas set ? where id=? `, [data, id]);
}

Reserva.delete = async (id) => {
    return await db.query(`delete from reservas where id=?`, [id]);
}


module.exports = Reserva;