const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;
const { User } = require('../../db/usersModel');

const deleteFavorite = async (userId, idToDelete) => {
  const deleteResult = await User.updateOne(
    { _id: userId },
    {
      $pull: { favorites: new ObjectId(idToDelete) },
    },
    {
      new: true,
    }
  );

  return deleteResult;
};

module.exports = { deleteFavorite };
