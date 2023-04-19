// const { search } = require('../../services');
const { addFavorite, getFavorites } = require('../../services/favorite');
const { catchAsyncWrapper } = require('../../utils');

const addFavoriteController = catchAsyncWrapper(async (req, res) => {
  await console.log('~shoppingListControllers.js [8]:', 'test');

  const { recipeId } = req.body;
  const { _id: userId } = req.user;

  const addRequestResult = await addFavorite(userId, recipeId);
  const { favorites } = addRequestResult;

  res.status(200).json({
    favorites,
  });
});

const getFavoriteController = catchAsyncWrapper(async (req, res) => {
  const { favorites } = req.user;

  if (!favorites) {
    return res.status(204).json();
  }

  const favoriteRecipes = await getFavorites(favorites);

  res.status(200).json({
    favoriteRecipes,
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
