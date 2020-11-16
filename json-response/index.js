const express = require('express');
const app = express();

// Example JavaScript literal object
const object = {
  author: 'Lois McMaster Bujold',
  books: ['The Vor Game', 'Barrayar', 'Cetaganda']
};

// res.json() converts
// literal object into JSON
app.get('/', (req, res) => {
  res.json(object);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
