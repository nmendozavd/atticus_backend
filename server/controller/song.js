const express = require('express');
const song = require('../../database/models')

module.exports = {
    getAll: (req, res) => {
        song.getAllSongs((err, data) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                return res.status(200).send(data)
            }
        })
    },
    getSong: (req, res) => {
        const id = req.params.id
        song.getSong(id, (err, data) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                return res.status(200).send(data)
            }
        })
    },
    deleteSong: (req, res) => {

    },
    createSong: (req, res) => {

    },
    updateSong: (req, res) => {

    }

}