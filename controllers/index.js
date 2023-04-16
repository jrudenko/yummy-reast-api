const { createUserController } = require('./userControllers');
const { loginController } = require('./loginControllers');
const { updateByIdControllers } = require('./updateByIdControllers');
const { subscribeUserController } = require('./subscribeUserControllers');

module.exports = {
  createUserController,
  loginController,
  updateByIdControllers,
  subscribeUserController,
};
