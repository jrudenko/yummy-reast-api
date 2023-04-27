const { object } = require('joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Set password for user'],
  },
  token: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  subscribe: {
    type: String,
    default: '',
  },
  favorites: {
    type: [mongoose.ObjectId],
    default: [],
  },
  shopping: {
    type: [],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
