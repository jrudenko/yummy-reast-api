// const path = require('path');
require('dotenv').config();
// const { CustomError } = require('../utils');

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const createUserController = catchAsyncWrapper(async (req, res) => {
  const userData = req.body;
  const createdUser = await users.registerUserService(userData);

  res.status(201).json({
    user: {
      id: `${createdUser._id}`,
      name: `${createdUser.name}`,
      email: `${createdUser.email}`,
      avatar: `${createdUser.avatar}`,
    },
  });
});

module.exports = createUserController;
