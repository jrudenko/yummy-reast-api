const express = require('express');
const { shopping: ctrl } = require('../controllers');

const { auth } = require('../middlewares');

const router = express.Router();

router.post('/', auth, ctrl.addToShoppingListController);

router.get('/', auth, ctrl.getShoppingListController);

router.delete('/:id', auth, ctrl.deleteFromShoppingListController);

module.exports = router;
