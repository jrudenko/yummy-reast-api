require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const getOwnRecipes = async (userId, pageNumber, pageSize) => {
  const skip = (pageNumber - 1) * pageSize;
  const count = await Recipes.countDocuments({ owner: userId });
  const recipes = await Recipes.find({ owner: userId })
    .skip(skip)
    .limit(pageSize)
    .lean();
  return {
    totalResults: count,
    pageSize,
    currentPage: pageNumber,
    results: recipes,
  };
};

module.exports = getOwnRecipes;
