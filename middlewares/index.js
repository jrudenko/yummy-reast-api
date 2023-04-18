const {
  createUserValidate,
  loginUserValidate,
  subscribeUserValidate,
} = require('./usersValidate');
const { auth } = require('./auth');
const { searchKeyWordValidate } = require('./searchKeyWordValidate');

module.exports = {
  createUserValidate,
  loginUserValidate,
  auth,
  subscribeUserValidate,
  searchKeyWordValidate,
};
