const express = require('express');
const { ingredients: ctrl } = require('../controllers');
const { auth, searchKeyWordValidate } = require('../middlewares');

const router = express.Router();

router.get('/list', auth, ctrl.ingredientsListController);

router.post('/', auth, searchKeyWordValidate, ctrl.ingredientsSearchController);

module.exports = router;