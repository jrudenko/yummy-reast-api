require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const loginController = catchAsyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  const loginnedUser = await users.login(email, password);

  const { token, _id, name, avatar } = loginnedUser;

  res.json({
    status: 'success',
    code: 200,
    user: {
      _id,
      name,
      email,
      avatar,
      token,
    },
  });
});
module.exports = loginController;
