const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const subscribeRouter = require('./subscribe');
const searchRouter = require('./search');
const ingredientsRouter = require('./ingredients');
const ownRecipesRouter = require('./ownRecipes');
const favoriteRouter = require('./favorite');
const shoppingListRouter = require('./shoppingList');

module.exports = {
  usersRouter,
  recipesRouter,
  subscribeRouter,
  searchRouter,
  ingredientsRouter,
  ownRecipesRouter,
  favoriteRouter,
  shoppingListRouter,
};
