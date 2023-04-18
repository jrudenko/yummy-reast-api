const bcrypt = require('bcrypt');
const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../../db/usersModel');

const { JWT_SECRET } = process.env;

// const login = async (req, res) => {
const login = async (email, password) => {
  // const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Unauthorized(
      'Email is wrong or not varify, or password is wrong'
    );
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized('Email or password is wrong');
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  const loginnedUser = await User.findByIdAndUpdate(user._id, { token });

  return loginnedUser;
};

module.exports = { login };
