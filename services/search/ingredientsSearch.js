const { Ingredients } = require('../../db/ingredientsModel');
const { Recipes } = require('../../db/recipesModel');

const ingredientsSearch = async (query, paginationData) => {
  const { skip, limit } = paginationData;

  const searchedIngredient = await Ingredients.findOne({
    // TODO: remove dublicate
    $text: { $search: query },
    // ttl: query
  }).select('_id: 1');

  if (!searchedIngredient) return [];

  const ingredientId = searchedIngredient._id;

  const searchRecipes = await Recipes.find({
    ingredients: {
      $elemMatch: {
        id: ingredientId,
      },
    },
  })
    .skip(skip)
    .limit(limit);

  return searchRecipes;
};

module.exports = {
  ingredientsSearch,
};
