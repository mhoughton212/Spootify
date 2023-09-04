const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/spootify_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database.');
});
