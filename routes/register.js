const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        let folder = path.join(__dirname, '../public/images/usuarios');
        cb(null, folder);
    },
    filename: function (req, file, cb){
        const newFilename = Math.floor(Date.now()/1000) + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage});

const controller = require('../controllers/registerController')

router.get('/', controller.register)

router.post('/', upload.single("avatar"),controller.newUser)

module.exports = router