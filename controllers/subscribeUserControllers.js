const { subscribeUser, sendSubscribeMail } = require('../services');

const { catchAsyncWrapper } = require('../utils');

const subscribeUserController = catchAsyncWrapper(async (req, res) => {
  const { emailToSubscribe } = req.body;
  const { id, subscribe } = req.user;

  if (emailToSubscribe === subscribe) {
    return res.status(204).json({});
  }

  const subscribedResult = await subscribeUser(id, emailToSubscribe);
  
  const subscribedEmail = subscribedResult.subscribe;

  const sendConfirmSubscribeMail = await sendSubscribeMail(subscribedEmail);
  console.log('CL: ~ file: subscribeUserControllers.js:18 ~ sendConfirmSubscribeMail:', sendConfirmSubscribeMail);

  res.status(200).json({
    subscribedEmail,
  });
});
module.exports = {
  subscribeUserController,
};
