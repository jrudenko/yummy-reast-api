const { createUserValidate, loginUserValidate } = require('./usersValidate');
const { auth } = require('./auth');

module.exports = {
  createUserValidate,
  loginUserValidate,
  auth,
};
