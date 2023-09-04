const Song = require('../models/song');

// Create a new song
const newSong = new Song({
  title: 'Song Title',
  artist: 'Artist Name',
  album: 'Album Name',
  genre: 'Genre',
  duration: 240, // Duration in seconds
});

// Save the new song to the database
newSong.save((err) => {
  if (err) {
    console.error('Error saving song:', err);
  } else {
    console.log('Song saved successfully.');
  }
});

exports.getAllSongs = async (req, res) => {
    try {
      const songs = await Song.find();
      res.json(songs);
    } catch (error) {
      console.error('Error fetching songs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.getSongById = async (req, res) => {
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
  };

exports.createSong = async (req, res) => {
    const { title, artist, album, duration } = req.body;
  
    try {
      const newSong = new Song({ title, artist, album, duration });
      await newSong.save();
      res.status(201).json(newSong);
    } catch (err) {
      console.error('Error creating song:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
exports.updateSong = async (req, res) => {
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
  };

  exports.deleteSong = async (req, res) => {
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
  }