const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const searchController = catchAsyncWrapper(async (req, res) => {
  const { query, type } = req.query;
  
  if (!type) {
    return res.status(404).json({
      message: 'needed type in search parameters',
    });
  }

  if (type === 'title') {
    const searchResult = await search.searchRecipesByTitle(query);
    return res.status(200).json({
      searchResult,
    });
  }

  if (type === 'ingredients') {

    const ingredients = await search.ingredientsIdSearch(query);
    const searchResult = await search.searchRecipesByIngredients(ingredients);
    return res.status(200).json({
      searchResult,
    });
  }

  const searchResult = await search.searchRecipesByTitle(query, type);

  if (searchResult.length === 0) {
    return res.status(204).json();
  }

  res.status(200).json({
    searchResult,
  });
});

module.exports = searchController;
