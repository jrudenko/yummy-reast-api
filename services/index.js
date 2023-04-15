const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { getCurrent } = require('./getCurrent');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  getCurrent,
};
