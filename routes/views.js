const express = require('express');
const router = express.Router();

const controller = require('../controllers/viewsController')

//home sweet home
router.get('/', controller.home)
//vistazo general a productos
router.get('/productos', controller.productos)
//vistazo rapido a productos especificos
router.get('/detalle/:id', controller.detalle)

module.exports = router