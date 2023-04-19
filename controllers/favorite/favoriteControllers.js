// const { search } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const addFavoriteController = catchAsyncWrapper(async (req, res) => {
  await console.log('~shoppingListControllers.js [8]:', 'test');

  res.status(200).json({
    message: 'test addFavoriteController',
  });
});

const getFavoriteController = catchAsyncWrapper(async (req, res) => {
  await console.log('~shoppingListControllers.js [8]:', 'test');

  res.status(200).json({
    message: 'test getFavoriteController',
  });
});

const deleteFavoriteController = catchAsyncWrapper(async (req, res) => {
  await console.log('~shoppingListControllers.js [8]:', 'test');

  res.status(200).json({
    message: 'test deleteFavoriteController',
  });
});

module.exports = {
  addFavoriteController,
  getFavoriteController,
  deleteFavoriteController,
};
