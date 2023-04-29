const {
  addFavorite,
  getFavorites,
  deleteFavorite,
  favoritesPagination,
} = require('../../services/favorite');
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
  const { favorites, _id: userId } = req.user;
  const { page = 1 } = req.query;

  if (!favorites) {
    return res.status(204).json();
  }

  const paginationData = await favoritesPagination(userId, page);

  const { totalFavorites, currentPage, skip, limit } = paginationData;

  const returnedPage = Number(currentPage)

  const favoriteRecipes = await getFavorites(favorites, skip, limit);

  res.status(200).json({
    totalFavorites,
    returnedPage,
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
