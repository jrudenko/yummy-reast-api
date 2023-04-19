require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const searchById = async id => {
  const result = await Recipes.findById(id);
  return result;
};

module.exports = { searchById };
