require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const getOwnRecipesById = catchAsyncWrapper(async (req, res) => {
  const userId = req.params;
  const result = await ownRecipes.getOwnRecipesById(userId);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      recipes: result,
    },
  });
});

module.exports = getOwnRecipesById;
