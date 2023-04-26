require('dotenv').config();

const { users } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const loginController = catchAsyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  const loginnedUser = await users.login(email, password);

  const { token, _id, name } = loginnedUser;

  res.json({
    status: 'success',
    code: 200,
    user: {
      _id,
      name,
      email,
      token,
    },
  });
});
module.exports = loginController;
