const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const searchController = catchAsyncWrapper(async (req, res) => {
  const { keyWord } = req.params;

  const searchResult = await search.searchRecipesByTitle(keyWord);

  if (searchResult.length === 0) {
    return res.status(204).json();
  }

  res.status(200).json({
    searchResult,
  });
});

module.exports = searchController;
