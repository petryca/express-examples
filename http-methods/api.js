const express = require('express');
const router = express.Router();

// REST API ROUTING EXAMPLE

// get all users
router.get('/users', (req, res) => {
  res.send('get /users');
});

// get specific user with id
router.get('/users/:id', (req, res) => {
  res.send('get /users/' + req.params.id);
});

// create a new user
router.post('/users', (req, res) => {
  res.send('post /users/');
});

// update a specific user with id
router.put('/users/:id', (req, res) => {
  res.send('put /users/' + req.params.id);
});

// delete a specific user with id
router.delete('/users/:id', (req, res) => {
  res.send('delete /users/' + req.params.id);
});

module.exports = router;
