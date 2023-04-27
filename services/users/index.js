const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { updateById } = require('./updateById');
const { uploadAvatar } = require('./uploadAvatar');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  updateById,
  uploadAvatar,
};
