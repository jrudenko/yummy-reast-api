const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async (recipeId) => {
  const recipes = await Recipes.findById(recipeId);

  const ingredients = JSON.parse(recipes.ingredients);

  recipes.ingredients = ingredients;

  return recipes;
};

module.exports = getOwnRecipesById;
