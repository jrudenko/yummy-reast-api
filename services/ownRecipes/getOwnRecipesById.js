const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async recipeId => {
  const recipes = await Recipes.findById(recipeId);
  return recipes;
};

module.exports = getOwnRecipesById;
