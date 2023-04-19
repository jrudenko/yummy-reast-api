const express = require('express');
const { ownRecipes: ctrl } = require('../controllers');
const { auth } = require('../middlewares');

const router = express.Router();

router.delete('/:recipesId', auth, ctrl.removeController);

module.exports = router;