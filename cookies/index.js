/*
npm install cookie-parser
*/
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('user', 'David').send('Setting a cookie');
});

app.get('/get', (req, res) => {
  res.send('Getting a cookie');
  console.log(req.cookies);
});

app.get('/clear', (req, res) => {
  res.clearCookie('user').send('Cleareing a cookie');
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
