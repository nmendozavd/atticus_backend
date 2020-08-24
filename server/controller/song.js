const express = require('express');
const song = require('../../database/models')

module.exports = {
  // getAll songs
    getAll: (req, res) => {
        song.getAllSongs((err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    // get song by id
    getSong: (req, res) => {
        const id = req.params.id
        song.getSong(id, (err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    // delete song by id
    deleteSong: (req, res) => {
        const id = req.params.id
        song.deleteSong(id, (err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    // create  song by entry
    createSong: (req, res) => {
        const entry = req.body
        song.createSong(entry, (err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    },
    // update song by id
    updateSong: (req, res) => {
        const id = req.params.id
        const entry = req.body
        // pass id using getSong()
        song.getSong(id, (err, data) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                const songToUpdate = data[0].id
                // pass in id to update, and JSON entry
                song.updateSong(songToUpdate, entry, (err, data) => {
                    if (err) {
                        res.status(400).send(err)
                    } else {
                        res.status(200).send(data)
                    }
                })
            }
        })
    }

}