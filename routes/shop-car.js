const express = require('express');
const router = express.Router();

const controller = require('../controllers/shop-carController')

router.get('/', controller.shopCar)

module.exports = router