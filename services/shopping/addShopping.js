const { v4: uuid } = require('uuid');
const { User } = require('../../db/usersModel');

const addShopping = async (userId, shoppingItem) => {
  const id = uuid();

  const addToShopping = { id, ...shoppingItem };

  const addRequestResult = await User.findByIdAndUpdate(
    userId,
    {
      $push: { shopping: addToShopping },
    },
    {
      new: true,
    }
  );

  return addRequestResult;
  
};

module.exports = { addShopping };
