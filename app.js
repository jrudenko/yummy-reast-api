require('dotenv').config();
const express = require('express');

const logger = require('morgan');
const cors = require('cors');

// * SWAGGER SECTION START
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swaggerApi.json');
// * SWAGGER SECTION END

const {
  usersRouter,
  recipesRouter,
  subscribeRouter,
  searchRouter,
  ingredientsRouter,
  ownRecipesRouter,
} = require('./routes');

const { DEV_ENV } = process.env;

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// * SWAGGER SECTION START
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// * SWAGGER SECTION END

app.use('/api/auth', usersRouter);

app.use('/api/recipes', recipesRouter);

app.use('/api/subscribe', subscribeRouter);

app.use('/api/search', searchRouter);

app.use('/api/ingredients', ingredientsRouter);

app.use('/api/ownRecipes', ownRecipesRouter);

app.get('/api', (req, res) => {
  res.send(
    'Hello World! This is the first response from YUMMY backend of 4th project Team :-)'
  );
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

  if (DEV_ENV === 'development') {
    res.status(status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(status || 500).json({
      message: err.message,
    });
  }
});

module.exports = app;
