const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

require('dotenv').config();

// Create an Express application
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'e2afac8b623a412ba3b9208aee56e5a9',
    clientSecret: 'dad303a6c6c34660b0da1786f5e079dd'
  })

  spotifyApi.authorizationCodeGrant(code).then((data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })).catch(() => {
    res.sendStatus(400)
  })
})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
