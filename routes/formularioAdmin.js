const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/adminController')
const autenticadoMiddleware = require('../middlewares/autenticadoMiddleware');
const permisosMiddleware = require('../middlewares/permisosMiddleware');
const multer = require('multer');
const { check ,body} = require("express-validator");



const validateForm = [
check('marca').isLength({
    min : 3
}).withMessage("La Marca del producto no puede tener menos de 3 caracteres"),
check('modelo').isLength({
    min : 3
}).withMessage("El modelo del producto no puede tener menos de 3 caracteres"),

check("image").custom((value, {req}) =>{
    let file = req.files.image;
    let acceptedExtensions = [".png", ".jpeg", ".jpg"]
    if (!file) {
        throw new Error("Por favor selecciona una imagen")
    }else if(file.size > (10 * 1024 * 1024)){
        fs.unlink(file.path, (err) => {
            if (err) {
                console.log(err)
            }
        })
        throw new Error("La imagen debe pesar menos de 15 mg")
    }
    return true
})]


const storage=multer.diskStorage(
    {
        destination:function(req,file,cb){
            let folder=path.join(__dirname,'../public/images/autos');
            cb(null,folder);
    },
        filename: function (req,file, cb){
        const newFilename=file.originalname +Math.floor( Date.now()/1000)+path.extname(file.originalname);
        
        cb(null, newFilename);
        }
    })

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes("jpeg") || (file.mimetype).includes("png") || (file.mimetype).includes("jpg")) {

        cb(null, true);
    }
    else {

        cb(null, false)
        req.fileError = "File format not valid";
    }
}

const upload = multer({storage}, {fileFilter}) 
const multipleUpload = upload.fields(
[
    {name: 'imagen', maxCount: 1}, 
    {name: 'imagen2', maxCount: 1}, 
    {name: 'imagen3', maxCount: 1},
    {name: 'imagen4', maxCount: 1},
    {name: 'imagen5', maxCount: 1}
]) 


//panel
router.get('/administrar',autenticadoMiddleware, controller.panel)
//agregar
router.get('/agregar',  permisosMiddleware, controller.formCrear);
router.post('/agregar', multipleUpload,  validateForm , controller.crear);
//edit
router.get('/editar/:id', permisosMiddleware, controller.formEdit);
router.put('/editar/:id', multipleUpload ,  validateForm ,controller.edit);
//delete
router.get('/delete/:id', permisosMiddleware, controller.formDelete)
router.delete ('/delete/:id', controller.delete)


module.exports = router