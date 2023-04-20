const users = require('./users');
const recipes = require('./recipes');
const subscribeUser = require('./subscribe');
const search = require('./search');
const ingredientsSearch = require('./search');
const ownRecipes = require('./ownRecipes');
const favorite = require('./favorite');

module.exports = {
  users,
  recipes,
  subscribeUser,
  search,
  ingredientsSearch,
  ownRecipes,
  favorite,
};
