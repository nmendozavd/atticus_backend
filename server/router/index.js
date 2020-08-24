const express = require('express');
const song = require('../controller/song')

const router = express.Router();

router
    .route('/')
    .get(song.getAll)
    .post(song.createSong);

router
    .route('/:id')
    .get(song.getSong)
    .put(song.updateSong)
    .delete(song.deleteSong);
module.exports = router