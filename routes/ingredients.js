const express = require('express');
const { ingredients: ctrl } = require('../controllers');
const { auth, queryStringValidate } = require('../middlewares');

const router = express.Router();

router.get('/list', auth, ctrl.ingredientsListController);

router.get('/', auth, queryStringValidate, ctrl.ingredientsSearchController);

module.exports = router;
