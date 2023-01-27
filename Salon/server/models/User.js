const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Aptt = require('./Appt');

const UserSchema = new Schema({
   name: {
    type: String,
    required: true,
  },
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

<<<<<<< HEAD
const User = mongoose.model('User', UserSchema);
=======
// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);
>>>>>>> e87dcb3e320971bc3bd4683bd7bef65896726536

module.exports = User