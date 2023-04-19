const express = require('express');
const { recipes: ctrl } = require('../controllers');
const { auth } = require('../middlewares');

const router = express.Router();

router.get('/category-list', auth, ctrl.getCategoryListController);

router.get('/main-page', auth, ctrl.getMainPageController);

router.get('/', auth, ctrl.searchRecipesController);

module.exports = router;
