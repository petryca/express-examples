/*
npm install --save pug
*/
const express = require('express');
const app = express();
const path = require('path');

// set pug templates
app.set('view engine', 'pug');

// set view directory
app.set('views', path.join(__dirname, 'views'));


// create a route
app.get('/', (req, res) => {
  res.render('hello', {name: 'David'});
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
