const createUserController = require('./userControllers');
const loginController = require('./loginControllers');
const updateByIdControllers = require('./updateByIdControllers');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const uploadAvatarController = require('./uploadAvatarController');

module.exports = {
  createUserController,
  loginController,
  updateByIdControllers,
  logout,
  getCurrent,
  uploadAvatarController,
};
