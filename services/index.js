const { registerUserService, verifyUserService } = require('./users');
const { login } = require('./login');
const { updateById } = require('./updateById');
const { subscribeUser } = require('./subscribeSrv');
const { sendSubscribeMail } = require('./sendSubscribeMail');
const { recipesSearchByCategory } = require('./recipesSearchByCategory');
const { searchRecipesByTitle } = require('./searchReceipesByTitle');

module.exports = {
  registerUserService,
  verifyUserService,
  login,
  updateById,
  subscribeUser,
  sendSubscribeMail,
  recipesSearchByCategory,
  searchRecipesByTitle,
};
