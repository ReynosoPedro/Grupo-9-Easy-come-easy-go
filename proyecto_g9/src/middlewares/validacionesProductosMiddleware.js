
const fs = require('fs');
const { check ,body} = require("express-validator");
const express = require('express');
const path = require('path');

const validateForm = [
    check('marca').notEmpty().withMessage('Debes completar la Marca del vehiculo'),
    check('kilometraje').notEmpty().withMessage('Debes completar el Kilometraje del vehiculo'),
    check('precio').notEmpty().withMessage('Debes completar el Precio del vehiculo'),
    check('precio').not().equals(0).withMessage('El precio debe ser diferencia a $0'),
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
    

    module.exports = validateForm;