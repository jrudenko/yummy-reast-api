const express = require('express');
const { search: ctrl } = require('../controllers');
const { auth, searchRecipeValidate } = require('../middlewares');

const router = express.Router();

router.get('/:keyWord', auth, searchRecipeValidate, ctrl.searchController);

module.exports = router;
