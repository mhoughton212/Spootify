const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const axios = require('axios'); 

// Define routes and logic related to songs
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Define other song-related routes here
router.get('/songs/:id', async (req, res) => {
    const songId = req.params.id;
  
    try {
      const song = await Song.findById(songId);
      if (!song) {
        return res.status(404).json({ message: 'Song not found' });
      }
      res.json(song);
    } catch (err) {
      console.error('Error fetching song by ID:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.post('/songs', async (req, res) => {
    const { title, artist, album, duration } = req.body;
  
    try {
      const newSong = new Song({ title, artist, album, duration });
      await newSong.save();
      res.status(201).json(newSong);
    } catch (err) {
      console.error('Error creating song:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.put('/songs/:id', async (req, res) => {
    const songId = req.params.id;
    const { title, artist, album, duration } = req.body;
  
    try {
      const song = await Song.findById(songId);
      if (!song) {
        return res.status(404).json({ message: 'Song not found' });
      }
  
      song.title = title;
      song.artist = artist;
      song.album = album;
      song.duration = duration;
  
      await song.save();
      res.json(song);
    } catch (err) {
      console.error('Error updating song:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.delete('/songs/:id', async (req, res) => {
    const songId = req.params.id;
  
    try {
      const song = await Song.findById(songId);
      if (!song) {
        return res.status(404).json({ message: 'Song not found' });
      }
  
      await song.remove();
      res.json({ message: 'Song deleted' });
    } catch (err) {
      console.error('Error deleting song:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
