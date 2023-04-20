const { User } = require('../../db/usersModel');

const popularRecipe = async () => {
  const popularRecipes = await User.aggregate([
    { $match: { favorites: { $exists: true, $ne: [] } } },
    { $unwind: '$favorites' },
    {
      $group: {
        _id: '$favorites',
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);

  return popularRecipes;
};

module.exports = { popularRecipe };
