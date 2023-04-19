const usersRouter = require('./users');
const recipesRouter = require('./recipes');
const subscribeRouter = require('./subscribe');
const searchRouter = require('./search');
const ingredientsRouter = require('./ingredients');
const favoriteRouter = require('./favorite');

module.exports = {
  usersRouter,
  recipesRouter,
  subscribeRouter,
  searchRouter,
  ingredientsRouter,
  favoriteRouter,
};
