require('dotenv').config();

const { recipesSearchByCategory } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const searchByCategoryController = catchAsyncWrapper(async (req, res) => {
  const { category } = req.params;
  const result = await recipesSearchByCategory(category);
  if (!result) {
    res.json({
      status: 204,
    });
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = searchByCategoryController;
