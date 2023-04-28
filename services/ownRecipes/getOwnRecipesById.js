const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async userId => {
  const recipes = await Recipes.find(userId);
  return recipes;
};

module.exports = getOwnRecipesById;
