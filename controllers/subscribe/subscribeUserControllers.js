const { subscribeUser } = require('../../services');

const { catchAsyncWrapper } = require('../../utils');

const subscribeUserController = catchAsyncWrapper(async (req, res) => {
  const { emailToSubscribe } = req.body;
  const { id, subscribe } = req.user;

  if (emailToSubscribe === subscribe) {
    return res.status(200).json({
      message: 'already done',
    });
  }

  const subscribedResult = await subscribeUser.subscribeUser(
    id,
    emailToSubscribe
  );

  const subscribedEmail = subscribedResult.subscribe;

  await subscribeUser.sendSubscribeMail(subscribedEmail);

  res.status(200).json({
    subscribed: subscribedEmail,
  });
});
module.exports = subscribeUserController;
