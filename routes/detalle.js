const express = require('express');
const router = express.Router();

const controller = require('../controllers/detalleController')

router.get('/', controller.detalle)

module.exports = router