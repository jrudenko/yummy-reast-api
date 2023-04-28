require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const updateByIdControllers = catchAsyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const {file} = req;

  const userData = req.body;
  const updatedUser = await users.updateById(userId, file, userData);
  res.json({
    status: 'success',
    code: 201,
    message: 'fields update',
    data: {
      updatedUser,
    },
  });
});

module.exports = updateByIdControllers;
