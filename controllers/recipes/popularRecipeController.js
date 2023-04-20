require('dotenv').config();

const { recipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const popularRecipeController = catchAsyncWrapper(async (req, res) => {
  const result = await recipes.popularRecipe();
  res.json({ favoriteRecipes: result });
});

module.exports = popularRecipeController;
