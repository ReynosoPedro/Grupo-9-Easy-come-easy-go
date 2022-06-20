const express = require('express');
const router = express.Router();

const controller = require('../controllers/productosController')

router.get('/', controller.productos)

module.exports = router