const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { getCurrent } = require('./getCurrent');
const { updateById } = require('./updateById');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  getCurrent,
  updateById,
};
