const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/editController')
const multer = require('multer');

const storage=multer.diskStorage(
    {
        destination:function(req,file,cb){
            let folder=path.join(__dirname,'../public/images/autos');
            cb(null,folder);
        },
        filename: function (req,file, cb){
        const newFilename=Math.floor( Date.now()/1000)+path.extname(file.originalname);
        cb(null, newFilename);
        }
    })

const UploadFile= multer({storage});

router.get('/:id', controller.seleccion);
router.put(':id', UploadFile.single("imagen-auto"),controller.edit);
        

const editController = require(path.resolve(__dirname,'../controllers/editController'));
router.get('/products', editController.index);

module.exports = router;