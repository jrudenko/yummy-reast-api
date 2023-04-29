const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const searchController = catchAsyncWrapper(async (req, res) => {
  const { query, page = 1, perPage = 6 } = req.query;

  const paginationData = await search.searchPagination(
    query,
    page,
    perPage
  );

  const searchResult = await search.searchRecipesByTitle(query, paginationData);
  const { total, currentPage } = paginationData;
  return res.status(200).json({
    total,
    page: currentPage,
    perPage,
    searchResult,
  });

});

module.exports = searchController;
