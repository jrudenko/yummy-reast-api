const { Recipes } = require('../../db/recipesModel');

const searchRecipesByTitle = async (query, paginationData) => {
  const { skip, limit } = paginationData;

  const search = await Recipes.find({
    $text: { $search: query },
    owner: { $exists: false },
  })
    .skip(skip)
    .limit(limit);
  return search;
};

module.exports = {
  searchRecipesByTitle,
};
