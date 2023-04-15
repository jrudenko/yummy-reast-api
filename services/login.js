const bcrypt = require('bcrypt');
const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../db/usersModel');

const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({ email });
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
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({
      status: 'sucess',
      code: 200,
      data: {
        token,
        user: {
          email,
          subscription,
        },
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    next();
  }
};

module.exports = { login };
