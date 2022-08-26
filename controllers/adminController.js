const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize= db.sequelize;
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const admin = {
    panel: (req, res) => {
        db.Productos.findAll({
            include:[{association:"brands"}, {association:"models"}, {association:"categories"}, {association:"colors"}, {association:"years"}, {association:"km_intervals"}]
        })
            .then(function(vehiculos) {
                res.render('admin/detalleAdministrar',{vehiculos:vehiculos})
            })


        /*let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('admin/detalleAdministrar' , {vehiculosDelArchivoJSON})*/
    },
    formCrear: (req, res) => {
        let tablas = [];            
                let marcas =db.Marcas.findAll() 
                let modelos =db.Modelos.findAll()
                let categorias =db.Categorias.findAll()
                Promise.all([marcas,modelos,categorias])
                .then(function(bases){
                    console.log(bases[0][1]);
                    res.render('admin/formularioVenta' , {bases})
                })
                .catch(function(error){
                    console.log("ERROR :" +error);
                })         
            },
    crear: (req, res) => {
        /*
        if(req.file!=undefined){
            db.Productos.create({
                brands: req.body.marca,
                models: req.body.modelo,
                categories: req.body.categirua ,
                km_intervals:kilometraje ,
                prices: req.body.precio,
                image_filename: req.file.filename,
                transmission: req.body.transmision,
                condition: req.body.condicion,
                years: req.body.year,
        })
        .then(function(vehiculos) {
                res.render('views/productos',{vehiculos:vehiculos})
            })
        }else {
            res.render('admin/formularioVenta');
        }
         */
        

        // validacion img
        if(req.file!=undefined){
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //guardar los datos del formulario
        let nuevoAuto={
                id: (vehiculosDelArchivoJSON.length+1),
                nombre: (req.body.marca+" "+req.body.modelo),
                año: req.body.year,
                kilometraje:req.body.kilometraje,
                precio: req.body.precio,
                transmision: req.body.transmision,
                imagen:req.file.filename,
        } 
        // los agrego al JSON
        vehiculosDelArchivoJSON.push(nuevoAuto);
        // no estoy seguro de si es necesario , 
        let nuevaLista=JSON.stringify( vehiculosDelArchivoJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),nuevaLista);
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('admin/formularioVenta');
        }
        

    },    formEdit: (req, res) => {

        /*
        db.Productos.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(vehiculoEditar) {
                res.render('admin/formularioEdit',{vehiculoEditar:vehiculos})
            })
        */
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEditar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('admin/formularioEdit',{vehiculoEditar})
    },

    edit: (req, res) => {
    /*
    if(req.file!=undefined){
        db.Productos.update({
                brands: req.body.marca,
                models: req.body.modelo,
                categories: req.body.categirua ,
                km_intervals:kilometraje ,
                prices: req.body.precio,
                image_filename: req.file.filename,
                transmission: req.body.transmision,
                condition: req.body.condicion,
                years: req.body.year,
        },
        {
            where: {
                id:req.params.id
                }
        })
        .then(function(vehiculos) {
                res.render('views/productos',{vehiculos:vehiculos})
            })
    }else {
    res.render('views/home');
    }
     */
        // validacion img
        if(req.file!=undefined){
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //modifico el auto con los datos ingresados
        vehiculosDelArchivoJSON[req.params.id-1].nombre=(req.body.marca+" "+req.body.modelo);
        vehiculosDelArchivoJSON[req.params.id-1].año=req.body.year;
        vehiculosDelArchivoJSON[req.params.id-1].kilometraje=req.body.kilometraje;
        vehiculosDelArchivoJSON[req.params.id-1].precio=req.body.precio;
        vehiculosDelArchivoJSON[req.params.id-1].transmision=req.body.transmision;
        vehiculosDelArchivoJSON[req.params.id-1].imagen=req.file.filename;
        // no estoy seguro de si es necesario , 
        let nuevaLista=JSON.stringify( vehiculosDelArchivoJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),nuevaLista);
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('views/home');
        }
        

    }  ,    formDelete: (req, res) => {
        /*
        db.Productos.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(vehiculoEliminar) {
                res.render('admin/formularioDelete',{vehiculoEliminar})
            })
        */

        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEliminar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('admin/formularioDelete',{vehiculoEliminar})
    },
    delete: (req, res) => {
                /*
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(vehiculos) {
                res.render('views/productos',{vehiculos:vehiculos})
            })
        */
    
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //elimino el auto con los datos ingresados
        let listaFinal= archivoV.filter(vehiculo=>vehiculo.id!=vId);
        // no estoy seguro de si es necesario , 
        listaFinal=JSON.stringify(listaFinal);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),listaFinal);
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
    
    }


}

module.exports = admin