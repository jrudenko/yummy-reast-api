const { Recipes } = require('../../db/recipesModel');

const searchRecipesByIngredients = async (ingredients) => {
  const searchRecipes = await Recipes.find({
    ingredients: {
      $elemMatch: {
        id: { $in: ingredients },
      },
    },
    owner: { $exists: false },
  });

  return searchRecipes;
};

module.exports = {
  searchRecipesByIngredients,
};
