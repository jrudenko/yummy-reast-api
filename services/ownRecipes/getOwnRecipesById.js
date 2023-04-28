const { Recipes } = require('../../db/recipesModel');

const getOwnRecipesById = async userId => {
  const recipes = await Recipes.findById(userId);
  return recipes;
};

module.exports = getOwnRecipesById;
