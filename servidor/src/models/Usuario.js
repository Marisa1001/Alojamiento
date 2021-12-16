const db = require('../db');
const { encriptar } = require('../helpers/encrypt');

const Usuario = {};

Usuario.get = async () => {
    return await db.query(`select * from usuarios`);
}

Usuario.find = async (id) => {
    return await db.query(`select * from usuarios where id=?` , [id]);
}

Usuario.create = async (data) => {
    data.password = encriptar(data.password);
    return await db.query(`insert into usuarios set ? `, [data]);
}

Usuario.singin = async (data) => {
    data.password = encriptar(data.password);
    return await db.query(`select * from usuarios where cuenta=? and password=?`, [data.cuenta, data.password]);
}


Usuario.update = async (id, data) => {
    return await db.query(`update usuarios set ? where id=? `, [data, id]);
}

Usuario.delete = async (id) => {
    return await db.query(`delete from usuarios where id=?`, [id]);
}


module.exports = Usuario;