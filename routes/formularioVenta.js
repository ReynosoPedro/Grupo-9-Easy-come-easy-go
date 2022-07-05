const express = require('express');
const router = express.Router();

const controller = require('../controllers/ventaController')

router.get('/', controller.seleccion)

module.exports = router