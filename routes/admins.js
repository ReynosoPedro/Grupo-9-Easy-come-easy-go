const express = require('express');
const router = express.Router();
const path = require('path');
/*const multer = require('multer');*/

const adminController = require(path.resolve(__dirname,'../controllers/adminController'));
router.get('/products', adminController.index);

module.exports = router;