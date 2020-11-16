const express = require('express');
const router = express.Router();
const User = require('../models/user');

// REST API ROUTING EXAMPLE

// get all users
router.get('/', async (req, res) => {
  try {
    const result = await User.find();

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }

  } catch (err) {
    res.sendStatus(400);
  }
});

// create a new user
router.post('/', async (req, res) => {
  try {
    const user = new User({
      realName: req.body.realname,
      userName: req.body.username
    });

    const result = await user.save();

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }

  } catch (err) {
    res.sendStatus(400);
  }
});

// get specific user with id
router.get('/:id', async (req, res) => {
  try {
    const result = await User.findById(req.params.id);

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }

  } catch (err) {
    res.sendStatus(400);
  }
});

// update a specific user with id
router.patch('/:id', async (req, res) => {
  try {
    const data = {
      'realName': req.body.realName,
    };

    const result = await User.findByIdAndUpdate(id, {$set:data});

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }

  } catch (err) {
    res.sendStatus(400);
  }
});

// delete a specific user with id
router.delete('/:id', async (req, res) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id);

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }

  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
