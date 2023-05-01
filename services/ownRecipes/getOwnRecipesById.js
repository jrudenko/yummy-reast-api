const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async recipeId => {
  const recipes = await Recipes.findById(recipeId);
  //   return recipes;
  const ingredients = recipes.ingredients[0];
  const returnedRecipes = [recipes, ...ingredients];

  return returnedRecipes;
};

module.exports = getOwnRecipesById;
