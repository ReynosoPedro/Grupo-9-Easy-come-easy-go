const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/adminController')
const autenticadoMiddleware = require('../middlewares/autenticadoMiddleware');
const permisosMiddleware = require('../middlewares/permisosMiddleware');
const multer = require('multer');
const fs = require('fs');
const { check ,body} = require("express-validator");




const validateForm = [
check('marca').notEmpty().withMessage('Debes completar la Marca del vehiculo'),
check('kilometraje').notEmpty().withMessage('Debes completar el Kilometraje del vehiculo'),
check('precio').notEmpty().withMessage('Debes completar el Precio del vehiculo'),
check('year').notEmpty().withMessage('Debes completar el Año del vehiculo'),
check('combustible').notEmpty().withMessage('Debes completar el combustible del vehiculo'),
check('transmision').notEmpty().withMessage('Debes completar la transmision del vehiculo'),
check('condicion').notEmpty().withMessage('Debes completar la condicion del vehiculo'),
check('categoria').notEmpty().withMessage('Debes completar la categoria del vehiculo'),
check('color').notEmpty().withMessage('Debes completar el Color del vehiculo'),
check('modelo').notEmpty().withMessage('Debes completar el Modelo del vehiculo'),
body('image').custom((value, {req})=>{
    let file= req.files.imagen[0];
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if(!file){
        throw new Error('Seleccione una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error(`Extensiones permitidas son `+acceptedExtensions);
        }
    }
    
    return true;
}),
body('image2').custom((value, {req})=>{
    let file= req.files.imagen2[0];
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if(!file){
        throw new Error('Seleccione una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error(`Extensiones permitidas son `+acceptedExtensions);
        }
    }
    
    return true;
}),
body('image3').custom((value, {req})=>{
    let file= req.files.imagen3[0];
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if(!file){
        throw new Error('Seleccione una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error(`Extensiones permitidas son `+acceptedExtensions);
        }
    }
    
    return true;
}),
body('image4').custom((value, {req})=>{
    let file= req.files.imagen4[0];
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if(!file){
        throw new Error('Seleccione una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Extensiones permitidas son `+acceptedExtensions);
        }
    }
    
    return true;
}),
body('image5').custom((value, {req})=>{
    let file= req.files.imagen5[0];
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    if(!file){
        throw new Error('Seleccione una imagen');
    }else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error(`Extensiones permitidas son `+acceptedExtensions);
        }
    }
    
    return true;
}),



]


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