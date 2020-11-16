const express = require('express');
const app = express();
const api = require('./api');

// api routes
app.use('/api', api);

// home page route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
