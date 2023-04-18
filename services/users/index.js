const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { updateById } = require('./updateById');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  updateById,
};
