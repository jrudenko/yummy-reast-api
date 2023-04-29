const { searchRecipesByTitle } = require('./searchRecipesByTitle');
const { ingredientsSearch } = require('./ingredientsSearch');
const { ingredientsIdSearch } = require('./ingredientsIdSearch');
const { searchRecipesByIngredients } = require('./searchRecipesByIngredients');
const { searchPagination } = require('./searchPagination');

module.exports = {
  searchRecipesByTitle,
  ingredientsSearch,
  ingredientsIdSearch,
  searchRecipesByIngredients,
  searchPagination,
};
