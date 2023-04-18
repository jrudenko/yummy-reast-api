require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const updateByIdControllers = catchAsyncWrapper(async (req, res) => {
  const { userId } = req.params;
  if (userId !== req.user._id) {
    return res.status(404).json({
      code: 404,
      message: 'Not autorized',
    });
  }
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
