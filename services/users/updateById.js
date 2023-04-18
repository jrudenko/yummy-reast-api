const { User } = require('../../db/usersModel');

const updateById = async (userId, { name, email }) => {
  const result = await User.findByIdAndUpdate(
    userId,
    { name, email },
    {
      new: true,
    }
  );
  if (!result) {
    const error = new Error('missing fields');
    error.status = 404;
    throw error;
  }
  return result;
};

module.exports = { updateById };
