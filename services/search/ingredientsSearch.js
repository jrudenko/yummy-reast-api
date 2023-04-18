const { Ingredients } = require('../../db/ingredientsModel');

const ingredientsSearch = async (keyWord) => {
  if (!keyWord) {
    const search = await Ingredients.find();
    return search;
  }

  const search = await Ingredients.find({ $text: { $search: keyWord } });

  return search;
};

module.exports = {
  ingredientsSearch,
};
