const express = require('express');
const { favorite: ctrl } = require('../controllers');

const { auth } = require('../middlewares');

const router = express.Router();

router.post('/', auth, ctrl.addFavoriteController);

router.get('/', auth, ctrl.getFavoriteController);

router.delete('/:id', auth, ctrl.deleteFavoriteController);

module.exports = router;
