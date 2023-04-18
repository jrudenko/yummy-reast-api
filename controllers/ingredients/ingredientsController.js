const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const ingredientsListController = catchAsyncWrapper(async (req, res) => {
  const searchResult = await search.ingredientsSearch();

  res.status(200).json({
    searchResult,
  });
});

const ingredientsSearchController = catchAsyncWrapper(async (req, res) => {
  const searchResult = await search.ingredientsSearch();

  res.status(200).json({
    searchResult,
  });
});

module.exports = { ingredientsListController,ingredientsSearchController };
