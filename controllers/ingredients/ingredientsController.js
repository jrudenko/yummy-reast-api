const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const ingredientsListController = catchAsyncWrapper(async (req, res) => {
  const searchResult = await search.ingredientsSearch();

  res.status(200).json({
    searchResult,
  });
});
// TODO: refactor both in one
const ingredientsSearchController = catchAsyncWrapper(async (req, res) => {
  const { query, page = 1, perPage = 6 } = req.query;

  const ingredients = true;

  const paginationData = await search.searchPagination(
    query,
    page,
    perPage,
    ingredients
  );

  const searchResult = await search.ingredientsSearch(query, paginationData);

  if (searchResult.length === 0) {
    return res.status(204).json();
  }

  const { total, currentPage } = paginationData;

  res.status(200).json({
    total,
    page: currentPage,
    perPage,
    searchResult,
  });
});

module.exports = { ingredientsListController, ingredientsSearchController };
