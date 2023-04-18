const express = require('express');
const { search: ctrl } = require('../controllers');
const { auth, searchKeyWordValidate } = require('../middlewares');

const router = express.Router();

router.post('/', auth, searchKeyWordValidate, ctrl.searchController);

module.exports = router;
