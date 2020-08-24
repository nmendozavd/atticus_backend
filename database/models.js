const db = require('./db');

module.exports = {
    // getAllsongs 
    getAllSongs: (callback) => { db.query('SELECT * FROM songs', callback) },
    // getSong by id
    getSong: (id, callback) => db.query(`SELECT * FROM songs WHERE id = ${id}`, callback),
    // createSong using JSON object 
    createSong: ({ name, genre, artist, length, song, ranking }, callback) => db.query(`INSERT INTO songs (name, genre, artist, length, song, ranking) VALUES ("${name}", "${genre}", "${artist}", ${length}, "${song}", ${ranking})`, callback),
    // deleteSong by id
    deleteSong: (id, callback) => db.query(`DELETE FROM songs WHERE id = ${id}`, callback),
    // updateSong by id using JSON object
    updateSong: (id, { name, genre, artist, length, song, ranking }, callback) => db.query(`UPDATE songs SET name = "${name}", genre = "${genre}", artist = "${artist}", length = ${length}, song = "${song}", ranking = ${ranking}  WHERE id = ${id}`, callback),
}