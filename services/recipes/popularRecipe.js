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
    {
      $lookup: {
        from: 'recipes',
        localField: '_id',
        foreignField: '_id',
        as: 'recipe',
      },
    },
    { $unwind: '$recipe' },
    {
      $project: {
        _id: '$recipe._id',
        title: '$recipe.title',
        category: '$recipe.category',
        area: '$recipe.area',
        instructions: '$recipe.instructions',
        description: '$recipe.description',
        thumb: '$recipe.thumb',
        preview: '$recipe.preview',
        time: '$recipe.time',
        youtube: '$recipe.youtube',
        tags: '$recipe.tags',
        createdAt: '$recipe.createdAt',
        updatedAt: '$recipe.updatedAt',
        ingredients: '$recipe.ingredients',
        count: 1,
      },
    },
  ]);

  return popularRecipes;
};

module.exports = { popularRecipe };
