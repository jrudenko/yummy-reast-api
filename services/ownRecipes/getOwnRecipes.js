require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const getOwnRecipes = async userId => {
  const recipes = await Recipes.find({ owner: userId }).lean();
  return recipes;
};

module.exports = getOwnRecipes;
