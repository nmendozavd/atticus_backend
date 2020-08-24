const express = require('express');
const song = require('../controller/song')

const router = express.Router();

router
    .route('/')
    .get(song.getAll)
    .post(song.createSong)
    .put()
    .delete();

router
    .route('/:id')
    .get(song.getSong)
module.exports = router