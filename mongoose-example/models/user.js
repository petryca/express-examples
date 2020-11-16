const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  realName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }

});

// collection users
module.exports = mongoose.model('User', userSchema);
