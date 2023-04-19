const express = require('express');
const { search: ctrl } = require('../controllers');
const { auth, queryStringValidate } = require('../middlewares');

const router = express.Router();

router.get('/', auth, queryStringValidate, ctrl.searchController);

module.exports = router;
