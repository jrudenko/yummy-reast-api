const { User } = require('../../db/usersModel');

const addShopping = async (userId, shoppingItem) => {
  const addRequestResult = await User.findByIdAndUpdate(
    userId,
    {
      $push: { shopping: shoppingItem },
    },
    {
      new: true,
    }
  );

  return addRequestResult;
};

module.exports = { addShopping };
