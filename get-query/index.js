const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send(req.query);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
