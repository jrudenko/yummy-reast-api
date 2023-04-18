const { Recipes } = require('../../db/recipesModel');
const { searchRecipesByTitle } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const searchController = catchAsyncWrapper(async (req, res) => {
  const { keyWord } = req.body;

  const searchResult = await searchRecipesByTitle(keyWord);

  res.json({
    searchResult,
  });
});

module.exports = searchController;
