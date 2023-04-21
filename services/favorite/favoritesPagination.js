const { User } = require('../../db/usersModel');

const favoritesPagination = async (userId, page) => {
  const favorites = await User.findById(userId);

  const totalFavorites = favorites.favorites.length;

  const limit = 4;
  const lastPage = Math.ceil(totalFavorites / limit);
  const currentPage = page > lastPage ? lastPage : page;

  let skip = 0;
  if (currentPage > 1) {
    skip = (currentPage - 1) * limit;
  }

  const pagination = {
    totalFavorites,
    currentPage,
    skip
  };

  return pagination;
};

module.exports = { favoritesPagination };
