require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const addController = catchAsyncWrapper(async (req, res) => {
  const userData = req.body;
  const { _id } = req.user;

  const file = req.file.buffer;

  const newRecipe = await ownRecipes.addOwnRecipe(userData, file, _id);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newRecipe,
    },
  });
});

module.exports = addController;
