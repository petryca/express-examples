/*
npm install --save pug express-session
*/
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

// sample user, would comes from database
const testUser = {
  name: 'David',
  username: 'david',
  password: 'secret'
}

// set pug templates
app.set('view engine', 'pug');

// set view directory
app.set('views', path.join(__dirname, 'views'));

// recieve plain form text
// send as x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));



// init session
app.use(session({
  secret: 'helloworld',
  resave: true,
  saveUninitialized: true,
  cookie: {}
}));

// login form
app.get('/', (req, res) => {
  res.render('login');
});

// login
app.post('/login', (req, res) => {
  if (
    req.body.username == testUser.username &&
    req.body.password == testUser.password
  ) {
    req.session.name = testUser.name;
    res.redirect('/user/home');
  } else {
    res.status(401).send('Wrong username or password');
  }
});

// logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// access all URL with the /user route
// only if session.name is set
app.use('/user', (req, res, next) => {
  if (req.session.name) {
    next();
  } else {
    res.redirect('/');
  }
});

// protected user home page
app.get('/user/home', (req, res) => {
  res.render('home', {name: req.session.name});
});

// protected user book page
app.get('/user/books', (req, res) => {
  res.render('books', {name: req.session.name});
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
