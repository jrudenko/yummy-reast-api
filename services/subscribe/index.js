const { subscribeUser } = require('./subscribeSrv');
const { sendSubscribeMail } = require('./sendSubscribeMail');

module.exports = {
  subscribeUser,
  sendSubscribeMail,
};
