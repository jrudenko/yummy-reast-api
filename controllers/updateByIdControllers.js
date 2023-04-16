require('dotenv').config();

const { updateById } = require('../services');

const { catchAsyncWrapper } = require('../utils');

const updateByIdControllers = catchAsyncWrapper(async (req, res) => {
  const { userId } = req.params;
  const userData = req.body;
  const updatedUser = await updateById(userId, userData);
  res.json({
    status: 'success',
    code: 201,
    message: 'fields update',
    data: {
      updatedUser,
    },
  });
});

module.exports = {
  updateByIdControllers,
};
