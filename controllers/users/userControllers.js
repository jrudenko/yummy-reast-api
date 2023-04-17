// const path = require('path');
require('dotenv').config();
// const { CustomError } = require('../utils');

const { registerUserService } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const createUserController = catchAsyncWrapper(async (req, res) => {
  const userData = req.body;
  const createdUser = await registerUserService(userData);

  res.status(201).json({
    user: {
      name: `${createdUser.name}`,
      email: `${createdUser.email}`,
      subscription: `${createdUser.subscription}`,
    },
  });
});

module.exports = createUserController;
