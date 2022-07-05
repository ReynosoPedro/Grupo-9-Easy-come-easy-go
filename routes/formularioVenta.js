const express = require('express');
const router = express.Router();

const controller = require('../controllers/ventaController')

router.get('/', controller.seleccion);
router.post('/', controller.crear);


module.exports = router