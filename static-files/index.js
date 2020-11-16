const express = require('express');
const app = express();

// index.html will be default page
// Home route will NOT work
app.use(express.static('public'));

// create a route
app.get('/', (req, res) => {
   res.send('Home route');
});

// index.html will NOT be default page
// Home route will work
// app.use(express.static('public'));

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
