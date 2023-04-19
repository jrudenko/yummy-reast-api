const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const subscribeRouter = require('./subscribe');
const searchRouter = require('./search');
const ingredientsRouter = require('./ingredients');
const ownRecipesRouter = require('./ownRecipes');

module.exports = {
  usersRouter,
  recipesRouter,
  subscribeRouter,
  searchRouter,
  ingredientsRouter,
  ownRecipesRouter,
};
