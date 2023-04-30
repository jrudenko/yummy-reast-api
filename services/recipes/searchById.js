require('dotenv').config();
const { Recipes } = require('../../db/recipesModel');

const searchById = async (id) => {
  const result = await Recipes.find({ _id: id, owner: { $exists: false } });
  return result;
};

module.exports = { searchById };
