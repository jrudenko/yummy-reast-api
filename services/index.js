const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { updateById } = require('./updateById');
const { subscribeUser } = require('./subscribeSrv');
const { sendSubscribeMail } = require('./sendSubscribeMail');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  updateById,
  subscribeUser,
  sendSubscribeMail,
};
