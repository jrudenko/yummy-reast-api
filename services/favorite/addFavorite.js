const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { User } = require('../../db/usersModel');

const addFavorite = async (userId, recipeId) => {
  const addRequestResult = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: { favorites: new ObjectId(recipeId) },
    },
    {
      new: true,
    }
  );

  return addRequestResult;
};

module.exports = { addFavorite };
