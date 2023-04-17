require('dotenv').config();

const { login } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const loginController = catchAsyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  const loginnedUser = await login(email, password);

  const { token } = loginnedUser;

  res.json({
    status: 'success',
    code: 200,
    user: {
      email,
      token,
    },
  });
});
module.exports = loginController;
