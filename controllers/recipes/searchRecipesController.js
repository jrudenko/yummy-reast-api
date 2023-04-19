require('dotenv').config();
const mongoose = require('mongoose');

const { recipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const searchRecipesController = catchAsyncWrapper(async (req, res) => {
  const { category, id } = req.query;

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
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad Request. Invalid ID',
      });
    }
    const result = await recipes.searchById(id);

    return res.json({
      status: 'success',
      code: 200,
      result,
    });
  }

  return res.status(400).json({
    status: 'error',
    code: 400,
    message: 'Bad Request. "category" or "id" parameter is required',
  });
});

module.exports = searchRecipesController;
