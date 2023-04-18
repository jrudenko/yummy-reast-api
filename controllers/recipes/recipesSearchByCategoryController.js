require('dotenv').config();

const { recipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const searchByCategoryController = catchAsyncWrapper(async (req, res) => {
  const { category } = req.params;
  const result = await recipes.recipesSearchByCategory(category);

  if (result.length === 0) {
    return res.status(204).json();
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = searchByCategoryController;
