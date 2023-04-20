const { User } = require('../../db/usersModel');

const deleteFromShopping = async (userId, idToDelete) => {
  const deleteResult = await User.updateOne(
    { _id: userId },
    {
      $pull: { shopping: {id: idToDelete} },
    },
    {
      new: true,
    }
  );

  return deleteResult;
};

module.exports = { deleteFromShopping };
