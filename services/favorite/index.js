const { addFavorite } = require('./addFavorite');
const { getFavorites } = require('./getFavorites');
const { deleteFavorite } = require('./deleteFavorite');
const { favoritesPagination } = require('./favoritesPagination');

module.exports = {
  addFavorite,
  getFavorites,
  deleteFavorite,
  favoritesPagination,
};
