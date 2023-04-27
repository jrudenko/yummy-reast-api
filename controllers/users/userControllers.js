// const path = require('path');
require('dotenv').config();
// const { CustomError } = require('../utils');

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const createUserController = catchAsyncWrapper(async (req, res) => {
  const userData = req.body;
  const createdUser = await users.registerUserService(userData);

  const { _id: id, name, email, avatar, token } = createdUser;

  res.status(201).json({
    user: {
      id,
      name,
      email,
      avatar,
      token,
    },
  });
});

module.exports = createUserController;
