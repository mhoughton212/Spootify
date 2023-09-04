const axios = require('axios');

// Define the song data you want to send in the POST request
const newSongData = {
  title: 'New Song Title',
  artist: 'New Song Artist',
  album: 'New Song Album',
  duration: 240, // Replace with the actual duration
};

// Define the URL for the POST request
const apiUrl = 'http://localhost:3001/songs'; // Replace with your server's URL

// Send the POST request using axios
axios.post(apiUrl, newSongData)
  .then((response) => {
    console.log('Song created:', response.data);
  })
  .catch((error) => {
    console.error('Error creating song:', error);
  });
