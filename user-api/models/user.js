const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name should be at least 3 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [18, 'Age must be at least 18'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
