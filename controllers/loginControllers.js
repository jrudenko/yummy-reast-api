require('dotenv').config();

// const { login } = require('../services');

const { catchAsyncWrapper } = require('../utils');

const loginControl = catchAsyncWrapper((req, res) => {
  const { email, token } = req.body;
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
      user: {
        email,
      },
    },
  });
});
module.exports = {
  loginControl,
};
