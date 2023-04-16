const sgMail = require('@sendgrid/mail');
const { catchAsyncWrapper } = require('../utils');

const sendMail = catchAsyncWrapper(async (email) => {
  console.log('CL: ~ file: sendSubscribeMail.js:5 ~ email:', email);
  console.log('~process.env.SENDGRID_API_KEY sendSubscribeMail.js [6]:', process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'yurgov@gmail.com',
    subject: 'So Yummy news subscription confirm',
    text: 'please open in browser, that support html messages view',
    html: '<h3> This mail confirm, that you subscribed to So Yummy news feed. Thank you </h3>',
  };
  await sgMail.send(msg);
});

const sendSubscribeMail = catchAsyncWrapper(async (email) => {
  const sendMailResult = await sendMail(email);
  console.log(
    'CL: ~ file: sendSubscribeMail.js:26 ~ sendMailResult:',
    sendMailResult
  );

  return {
    statusCode: 200,
  };
});

module.exports = { sendSubscribeMail };
