require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const updateByIdControllers = catchAsyncWrapper(async (req, res) => {
  const { userId } = req.params;
  const userData = req.body;
  const updatedUser = await users.updateById(userId, userData);
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
