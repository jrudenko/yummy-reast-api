require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const getOwnRecipes = catchAsyncWrapper(async (req, res) => {
  const userId = req.params;
  const pageNumber = req.query.pageNumber || 1;
  const pageSize = req.query.pageSize || 4;

  const recipes = await ownRecipes.getOwnRecipes(userId, pageNumber, pageSize);

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      recipes: recipes.results,
      pagination: {
        totalResults: recipes.totalResults,
        pageSize: recipes.pageSize,
        currentPage: recipes.currentPage,
      },
    },
  });
});

module.exports = getOwnRecipes;
