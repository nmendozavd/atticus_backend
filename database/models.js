const db = require('./db');

module.exports = {
    getAllSongs: (callback) => {
        db.query('SELECT * FROM songs', callback)
    },
    getSong: (id, callback) => db.query(`SELECT * FROM songs WHERE id = ${id}`, callback)
}