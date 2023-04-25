const { Ingredients } = require('../../db/ingredientsModel');

const ingredientsIdSearch = async (query) => {

  const searchedIngredients = await Ingredients.find({
    $text: { $search: query },
    // ttl: query
  }).select('_id: 1');

  const ingredientsId = searchedIngredients.map(id => id._id)

  return ingredientsId;
};

module.exports = {
  ingredientsIdSearch,
};
