const { Recipes } = require('../../db/recipesModel');

const getFavorites = async (favorites, skip, limit) => {
  const result = await Recipes.find({
    _id: favorites,
  })
    .sort({ title: 1 })
    .skip(skip)
    .limit(limit);

  return result;
};

module.exports = { getFavorites };
