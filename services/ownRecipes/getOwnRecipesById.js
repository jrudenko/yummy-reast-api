const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async recipeId => {
  const recipes = await Recipes.findById(recipeId);
  // console.log(
  //   'CL: ~ file: getOwnRecipesById.js:5 ~ recipes:',
  //   recipes.ingredients
  // );
  //   return recipes;

  const ingredients = JSON.parse(recipes.ingredients);

  // console.log('~recipes.ingredients[0] getOwnRecipesById.js [9]:', recipes.ingredients[0]);
  recipes.ingredients = ingredients;

  return recipes;
};

module.exports = getOwnRecipesById;
