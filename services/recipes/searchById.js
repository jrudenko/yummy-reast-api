require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const searchById = async recipesId => {
  const result = await Recipes.findById(recipesId);
  return result;
};

module.exports = { searchById };
