const bcrypt = require('bcrypt');
const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../../db/usersModel');

const { JWT_SECRET } = process.env;

const login = async (email, password) => {
  const user = await User.findOne({
    email: { $regex: new RegExp(email, 'i') },
  }).select('+password');
  if (!user) {
    throw new Unauthorized(
      'Email is wrong or not verify, or password is wrong'
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
  const loginnedUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    {
      new: true,
    }
  );

  return loginnedUser;
};

module.exports = { login };
