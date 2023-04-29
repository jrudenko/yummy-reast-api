const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async recipeId => {
  const recipes = await Recipes.findById(recipeId);
  console.log(recipeId);
  return recipes;
};

module.exports = getOwnRecipesById;
