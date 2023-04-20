// const { search } = require('../../services');
const { addFavorite, getFavorites,deleteFavorite } = require('../../services/favorite');
const { catchAsyncWrapper } = require('../../utils');

const addFavoriteController = catchAsyncWrapper(async (req, res) => {

  const { recipeId } = req.body;
  const { _id: userId } = req.user;

  const addRequestResult = await addFavorite(userId, recipeId);
  const { favorites } = addRequestResult;

  res.status(201).json({
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
  const { id: idToDelete } = req.params;
  const { _id: userId } = req.user;

  await deleteFavorite(userId, idToDelete);

  res.status(204).json();
});

module.exports = {
  addFavoriteController,
  getFavoriteController,
  deleteFavoriteController,
};
