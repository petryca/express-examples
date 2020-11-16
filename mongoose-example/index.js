const express = require('express');
const users = require('./routes/users');
const mongoose = require('mongoose');

const app = express();

// connect to mongo
mongoose.connect('mongodb://localhost:27017/people', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to mongo'));

// accept JSON
app.use(express.json());

// api routes
app.use('/users', users);

// home page route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
