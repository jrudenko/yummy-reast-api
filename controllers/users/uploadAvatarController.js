require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const uploadAvatarController = catchAsyncWrapper(async (req, res) => {
  // const userData = req.body;
  const { _id } = req.user;
  //   console.log(req.file);

  const { file } = req;
  // console.log('~req.file uploadAvatarController.js [13]:', req.file);
  // console.log('CL: ~ file: uploadAvatarController.js:13 ~ file:', file);

  const uploadUserAvatar = await users.uploadAvatar(file, _id);
  const { avatar } = uploadUserAvatar;

  res.status(201).json({
    status: 'success',
    code: 201,
    avatar,
  });
});

module.exports = uploadAvatarController;
