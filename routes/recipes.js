const express = require('express');
const { getCategoryListController } = require('../controllers');
const { auth } = require('../middlewares');

const router = express.Router();

router.get('/category-list', auth, getCategoryListController);

module.exports = router;
