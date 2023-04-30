const { Ingredients } = require('../../db/ingredientsModel');
const { Recipes } = require('../../db/recipesModel');

const ingredientsSearch = async (query, paginationData) => {
  if (!query) {
    const search = await Ingredients.find();
    return search;
  }

  const { skip, limit } = paginationData;

  const searchedIngredient = await Ingredients.findOne({
    $text: { $search: query },
  }).select('_id: 1');

  if (!searchedIngredient) return [];

  const ingredientId = searchedIngredient._id;

  const searchRecipes = await Recipes.find({
    ingredients: {
      $elemMatch: {
        id: ingredientId,
      },
    },
    owner: { $exists: false },
  })
    .skip(skip)
    .limit(limit);

  return searchRecipes;
};

module.exports = {
  ingredientsSearch,
};
