require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const removeOwnRecipes = async (userId, recipesId) => {
  const recipe = await Recipes.findById(recipesId);

  if (!recipe) {
    return null;
  }

  if (String(recipe.owner) !== userId) {
    return null;
  }
  const result = await Recipes.findByIdAndRemove(recipesId);
  return result;
};

module.exports = removeOwnRecipes;
