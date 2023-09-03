const express = require('express');

// Create an Express application
const app = express();

// Define your routes and middleware here
const songsRouter = require('./routes/songs');
const albumsRouter = require('./routes/albums');
const artistsRouter = require('./routes/artists');
const playlistsRouter = require('./routes/playlists');

app.use('/', songsRouter);
app.use('/', albumsRouter);
app.use('/', artistsRouter);
app.use('/', playlistsRouter);

// Define a default route
app.get('/', (req, res) => {
  res.send('Hi :))');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
