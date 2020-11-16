const express = require('express');
const app = express();

// recieve plain form text
// send as x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// create a route
app.post('/', (req, res) => {
  res.send(req.body);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
