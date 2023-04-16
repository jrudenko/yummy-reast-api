const { User } = require('../db/usersModel');

// TODO: subscribe validation,
const subscribeUser = async (id, emailToSubscribe) => {
  const updateResult = await User.findByIdAndUpdate(
    id,
    { subscribe: emailToSubscribe },
    {
      new: true,
    }
  );
  if (!updateResult) {
    const error = new Error('missing fields');
    error.status = 404;
    throw error;
  }

  return updateResult;
};

module.exports = { subscribeUser };

// TODO ? JWT token expired time
