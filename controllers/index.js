const { createUserController } = require('./userControllers');
const { loginController } = require('./loginControllers');
const { updateByIdControllers } = require('./updateByIdControllers');
const { getCategoryListController } = require('./getCategoryListController');
const { subscribeUserController } = require('./subscribeUserControllers');

module.exports = {
  createUserController,
  loginController,
  updateByIdControllers,
  getCategoryListController,
  subscribeUserController,
};
