const {
  createUserValidate,
  loginUserValidate,
  subscribeUserValidate,
} = require('./usersValidate');
const { auth } = require('./auth');
const { searchKeyWordValidate } = require('./searchKeyWordValidate');
const { upload } = require('./upload');

module.exports = {
  createUserValidate,
  loginUserValidate,
  auth,
  subscribeUserValidate,
  searchKeyWordValidate,
  upload,
};
