const { Ingredients } = require('../../db/ingredientsModel');
const { Recipes } = require('../../db/recipesModel');

const ingredientsSearch = async (keyWord) => {
  if (!keyWord) {
    const search = await Ingredients.find();
    return search;
  }

  const searchedIngredient = await Ingredients.findOne({
    // $text: { $search: keyWord },
    ttl: keyWord,
  }).select('_id: 1');

  const ingredientId = searchedIngredient._id;
  // console.log('CL: ~ file: ingredientsSearch.js:18 ~ ingredientId:', ingredientId);

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
