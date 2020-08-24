const express = require('express');
const song = require('../controller/song')

const router = express.Router();

router
    .route('/')
    .get()
    .post()
    .put()
    .delete();


module.exports = router