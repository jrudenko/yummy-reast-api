const { Recipes } = require('../db/recipesModel');

const searchRecipesByTitle = async (keyWord) => {
  const search = await Recipes.find({ $text: { $search: keyWord } });
  return search;
};

module.exports = {
  searchRecipesByTitle,
};
