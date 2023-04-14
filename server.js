require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
// const { catchAsyncWrapper } = require('./utils');

const { PORT } = process.env;

/* const connectMongo = catchAsyncWrapper(async () => {
  mongoose.set('strictQuery', false);
  // eslint-disable-next-line no-console
  await mongoose.connect(MONGO_URL).catch((error) => console.log(error)); // todo: refactor
  // eslint-disable-next-line no-console
  return console.log('connected to DB');
});
connectMongo(); */

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running up on port ${PORT}
  api available at http://localhost:${PORT}/api/`);
});
