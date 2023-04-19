require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const getOwnRecipes = catchAsyncWrapper(async (req, res) => {
  const userId = req.user._id;

  const recipes = await ownRecipes.getOwnRecipes(userId);

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      recipes,
    },
  });
});

module.exports = getOwnRecipes;
