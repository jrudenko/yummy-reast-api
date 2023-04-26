require('dotenv').config();

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const addController = catchAsyncWrapper(async (req, res) => {
  const userData = req.body;
  const { _id } = req.user;
  //   console.log(req.file);

  const file = req.file.buffer;

  const newRecipe = await ownRecipes.addOwnRecipe(userData, file, _id);
  console.log('CL: ~ file: addController.js:15 ~ newRecipe:', newRecipe);// TODO: delete
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newRecipe,
    },
  });
});

module.exports = addController;
