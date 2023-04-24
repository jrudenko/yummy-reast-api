require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const removeOwnRecipes = async (userId, recipesId) => {
  const recipe = await Recipes.findById(recipesId);

  if (!recipe) {
    return null;
  }

  if (recipe.owner.toString() !== userId.toString()) {
    return null;
  }
  const result = await Recipes.findByIdAndRemove(recipesId);
  return result;
};

module.exports = removeOwnRecipes;
