const { searchRecipesByTitle } = require('./searchRecipesByTitle');
const { ingredientsSearch } = require('./ingredientsSearch');
const { ingredientsIdSearch } = require('./ingredientsIdSearch');
const { searchRecipesByIngredients } = require('./searchRecipesByIngredients');

module.exports = {
  searchRecipesByTitle,
  ingredientsSearch,
  ingredientsIdSearch,
  searchRecipesByIngredients,
};
