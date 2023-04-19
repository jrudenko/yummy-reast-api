require('dotenv').config();
const mongoose = require('mongoose');

const { ownRecipes } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const removeController = catchAsyncWrapper(async (req, res) => {
  const { recipesId } = req.params;
  const userId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(recipesId)) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Bad Request. Invalid ID',
    });
  }
  const result = await ownRecipes.removeOwnRecipes(userId, recipesId);

  if (!result) {
    res.status(404).json({
      message: 'id not found',
    });
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'contact delete',
    data: {
      result,
    },
  });
});

module.exports = removeController;
