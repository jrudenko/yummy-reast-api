const { User } = require('../../db/usersModel');

const getShopping = async (userId) => {
  const result = await User.findById(
    userId,
    'shopping',
    {
      new: true,
    }
  );

  return result;
};

module.exports = { getShopping };
