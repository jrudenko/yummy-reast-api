const express = require('express');

const logger = require('morgan');
const cors = require('cors');

const { NODE_ENV } = process.env;

/* 
// * SWAGGER SECTION START
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./utils/swaggerApi.json');
// * SWAGGER SECTION END 
*/

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
/* // * SWAGGER SECTION START
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// * SWAGGER SECTION END */

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'route not found',
  });
});

/**
 * * Global error handler (middleware)
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { status } = err; // there we get error status, that was setting on user useMiddlewares

  if (NODE_ENV === 'development') {
    res.status(status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    // const { status: customStatus, message } = customErrorMessage(err.message);
    // res.status(customStatus || 500).json({
    //   message,
    // });
    res.status(status || 500).json({
      message: err.message,
    });
  }
});

module.exports = app;
