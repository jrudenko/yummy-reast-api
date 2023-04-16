const { createUserController } = require('./userControllers');
const { loginController } = require('./loginControllers');
const { updateByIdControllers } = require('./updateByIdControllers');

module.exports = {
  createUserController,
  loginController,
  updateByIdControllers,
};
