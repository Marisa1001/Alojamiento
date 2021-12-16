const db = require('../db');
const Contacto = {};

Contacto.get = async () => {
    return await db.query(`select * from contactos`);
}

Contacto.find = async (id) => {
    return await db.query(`select * from contactos where id=?` , [id]);
}

Contacto.create = async (data) => {
    return await db.query(`insert into contactos set ? `, [data]);
} 

Contacto.update = async (id, data) => {
    return await db.query(`update contactos set ? where id=? `, [data, id]);
}

Contacto.delete = async (id) => {
    return await db.query(`delete from contactos where id=?`, [id]);
}


module.exports = Contacto;