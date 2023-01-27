const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Aptt = require('./Appt');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
    password: {
      type: String,
      required: true,
      minlength: 6
  },
  // email validation status
    status: {
    type: String, 
      // enum: ['Pending', 'Active'],
      default: 0, // default: 'Pending'
    },
  },
);

const User = mongoose.model('User', UserSchema);

module.exports = User