/*
npm install --save express-handlebars
*/
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

// use handlebars templates
app.set('view engine', 'hbs');

// configure handlebars
app.engine('hbs', handlebars({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  defaultLayout: 'index'
}));

// folder for static content
app.use(express.static('public'));

// create routes
// and try various template techniques
app.get('/foo', (req, res) => {
  res.render('main', {layout: 'foo'});
});

app.get('/bar', (req, res) => {
  let colors = ['red', 'green', 'blue'];
  res.render('bar', {
    user: 'Just Testing',
    colors: colors,
    status: true
  });
});

app.get(['/','/:user'], (req, res) => {
  if (typeof req.params.user === 'undefined') {
    req.params.user = 'unknown user';
  }
  res.render('main', {user: req.params.user, color: 'green'});
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
