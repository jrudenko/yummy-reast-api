const {
  createUserValidate,
  loginUserValidate,
  subscribeUserValidate,
} = require('./usersValidate');
const { auth } = require('./auth');
const { queryStringValidate } = require('./queryStringValidate');
const { upload } = require('./upload');

module.exports = {
  createUserValidate,
  loginUserValidate,
  auth,
  subscribeUserValidate,
  upload,
  queryStringValidate,
};
