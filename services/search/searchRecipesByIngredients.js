const { Recipes } = require('../../db/recipesModel');

const searchRecipesByIngredients = async (ingredients) => {

  const searchRecipes = await Recipes.find({
    ingredients: {
      $elemMatch: {
        id: {$in: ingredients},
      },
    },
  });

  return searchRecipes;
};

module.exports = {
  searchRecipesByIngredients,
};
