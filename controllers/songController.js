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
