const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users/:id', (req, res) => {
  if (req.params.id == '12') {
    res.status(200).send('User 12 found'); // no need to send 200
  } else {
    res.status(404).send('User ' + req.params.id + ' not found');
  }
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
