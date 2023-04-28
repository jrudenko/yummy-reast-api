require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const uploadAvatarController = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  const { file } = req;

  const uploadUserAvatar = await users.uploadAvatar(file, _id);
  const { avatar } = uploadUserAvatar;

  res.status(201).json({
    status: 'success',
    code: 201,
    avatar,
  });
});

module.exports = uploadAvatarController;
