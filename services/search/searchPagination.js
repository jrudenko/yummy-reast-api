const { Recipes } = require('../../db/recipesModel');
const { Ingredients } = require('../../db/ingredientsModel');

const searchPagination = async (
  // userId = null,
  query,
  page,
  perPage,
  ingredients
) => {
  let total = 0;

  if (ingredients) {
    const searchedIngredient = await Ingredients.findOne({
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
    });
    total = searchRecipes.length;
  } else {
    const search = await Recipes.find({ $text: { $search: query } });
    total = search.length;
  }

  let currentPage = 0;
  if (page > 0) {
    const lastPage = Math.ceil(total / perPage);
    currentPage = page > lastPage ? lastPage : page;
  }

  let skip = 0;

  if (currentPage > 1) {
    skip = (currentPage - 1) * perPage;
  }

  const pagination = {
    total,
    currentPage,
    skip,
    limit: perPage,
  };

  return pagination;
};

module.exports = { searchPagination };
