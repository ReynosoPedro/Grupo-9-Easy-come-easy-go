const express = require('express');
const router = express.Router();

const controller = require('../controllers/detalleController')

router.get('/:id', controller.detalle)

module.exports = router