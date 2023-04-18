const { Ingredients } = require('../../db/ingredientsModel');

const ingredientsSearch = async () => {
  const search = await Ingredients.find();

  return search;
};

module.exports = {
  ingredientsSearch,
};
