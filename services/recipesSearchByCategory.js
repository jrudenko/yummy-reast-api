require('dotenv').config();
const { Recipes } = require('../db/recipesModel');

const recipesSearchByCategory = async category => {
  const result = await Recipes.find({
    category,
  }).limit(8);
  return result;
};

module.exports = { recipesSearchByCategory };
