require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const getOwnRecipesById = catchAsyncWrapper(async (req, res) => {
  const { recipeId } = req.params;
  console.log(recipeId);

  const result = await ownRecipes.getOwnRecipesById(recipeId);
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      recipes: result,
    },
  });
});

module.exports = getOwnRecipesById;
