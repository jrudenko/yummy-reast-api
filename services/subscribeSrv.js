const { User } = require('../db/usersModel');

// TODO: retuen & responce, errors
// TODO: subscribe validation,
// TODO: send-mail
// TODO: custom? error
const subscribeUser = async (id, emailToSubscribe) => {
  const updateResult = await User.findByIdAndUpdate(
    id,
    { subscribe: emailToSubscribe },
    {
      new: true,
    }
  );
  // const updateResult = await User.updateOne(
  //   { _id: id },
  //   { subscribe: emailToSubscribe }
  // );
  // if (!updateResult) {
  //   const error = new Error('missing fields');
  //   error.status = 404;
  //   throw error;
  // }
  if (!updateResult) {
    const error = new Error('missing fields');
    error.status = 404;
    throw error;
  }

  return updateResult;
};

module.exports = { subscribeUser };

// TODO ? JWT token expired termine
