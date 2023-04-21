require('dotenv').config();

const { recipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const searchByIdController = catchAsyncWrapper(async (req, res) => {
  const { recipesId } = req.params;
  const result = await recipes.searchById(recipesId);

  if (!result) {
    return res.status(204).json();
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = searchByIdController;
