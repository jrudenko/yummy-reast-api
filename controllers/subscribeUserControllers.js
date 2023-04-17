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

  await sendSubscribeMail(subscribedEmail);
  // TODO: add sending email check after confirm SendGrid credentials

  res.status(200).json({
    subscribe: subscribedEmail,
  });
});
module.exports = {
  subscribeUserController,
};
