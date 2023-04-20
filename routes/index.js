const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const subscribeRouter = require('./subscribe');
const searchRouter = require('./search');
const ingredientsRouter = require('./ingredients');
const favoriteRouter = require('./favorite');
const shoppingListRouter = require('./shoppingList');

module.exports = {
  usersRouter,
  recipesRouter,
  subscribeRouter,
  searchRouter,
  ingredientsRouter,
  favoriteRouter,
  shoppingListRouter,
};
