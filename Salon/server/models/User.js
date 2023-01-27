const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  // phone: {
    type: Number,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
    password: {
      type: String,
      required: true,
  },
  // email validation status
    status: {
    //   type: String, 
      // enum: ['Pending', 'Active'],
      // default: 'Pending'
    },
  },
);

const User = model('User', UserSchema);

module.exports = User