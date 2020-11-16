const express = require('express');
const app = express();

// recieve plain form text
app.use(express.json());

// create a route
app.get('/', (req, res) => {
  res.send(req.body);
});

app.get('/colors', (req, res) => {
  res.send(req.body.colors);
});

app.get('/colors/:index', (req, res) => {
  res.send(req.body.colors[req.params.index]);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
