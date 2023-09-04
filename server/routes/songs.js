const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const axios = require('axios'); 


const songController = require('../controllers/songController');

router.get('/api/songs', songController.getAllSongs);
router.get('/api/songs/:id', songController.getSongById);
router.post('/api/songs', songController.createSong);
router.put('/api/songs/:id', songController.updateSong);
router.delete('/api/songs/:id', songController.deleteSong);

module.exports = router;
