const express = require('express');
const { getCategoryListController } = require('../controllers/recipes');
const { auth } = require('../middlewares');

const router = express.Router();

router.get('/category-list', auth, getCategoryListController);

router.get('/main-page', auth, getCategoryListController);

module.exports = router;
