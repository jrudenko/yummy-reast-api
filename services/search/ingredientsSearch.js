const { Ingredients } = require('../../db/ingredientsModel');
const { Recipes } = require('../../db/recipesModel');

const ingredientsSearch = async (query) => {
  if (!query) {
    const search = await Ingredients.find();
    return search;
  }

  const searchedIngredient = await Ingredients.findOne({
    $text: { $search: query },
    // ttl: query
  }).select('_id: 1');

  if (!searchedIngredient) return []

  const ingredientId = searchedIngredient._id;

  const searchRecipes = await Recipes.find({
    ingredients: {
      $elemMatch: {
        id: ingredientId,
      },
    },
  });

  return searchRecipes;
};

module.exports = {
  ingredientsSearch,
};
