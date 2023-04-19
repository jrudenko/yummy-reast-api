const { Recipes } = require('../../db/recipesModel');

const searchRecipesByTitle = async (query) => {
  const search = await Recipes.find({ $text: { $search: query } });
  return search;
};

module.exports = {
  searchRecipesByTitle,
};
