require('dotenv').config();

const { recipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const searchRecipesController = catchAsyncWrapper(async (req, res) => {
  const { category } = req.query;
  const { id } = req.query;
  // let result;

  if (category) {
    const result = await recipes.searchByCategory(category);
    if (result.length === 0) {
      return res.status(204).json();
    }
    return res.json({
      status: 'success',
      code: 200,
      result,
    });
  }
  if (id) {
    const result = await recipes.searchById(id);
    if (result.length === 0) {
      return res.status(204).json();
    }
    return res.json({
      status: 'success',
      code: 200,
      result,
    });
  }

  // console.log(category);
  // console.log(id);

  return res.status(400).json({
    status: 'error',
    code: 400,
    message: 'Bad Request. "category" or "id" parameter is required',
  });
});

module.exports = searchRecipesController;
