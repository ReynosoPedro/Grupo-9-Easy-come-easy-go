const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize= db.sequelize;

const vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const views = {
    home: (req, res) => {
        res.render('views/home',{vehiculos: vehiculosDelArchivoJSON})
    },
    productos: (req, res) => {
        db.Productos.findAll({
            include:[{association:"brands"}, {association:"models"}, {association:"categories"}, {association:"colors"}, {association:"years"}, {association:"km_intervals"}]
        })
            .then(function(vehiculos) {
                res.render('views/productos',{vehiculos:vehiculos})
            })


        /*let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON})*/
    },
    detalle: (req, res) => {
        db.Productos.findByPk(req.params.id,{include:[{association:"brands"}, {association:"models"}, {association:"categories"}, {association:"colors"}, {association:"years"}, {association:"km_intervals"}]})
            .then(function(vehiculos){
                res.render('views/detalle',{vehiculos:vehiculos})
            })

        /*let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/detalle',{vehiculos: vehiculosDelArchivoJSON[req.params.id-1]})*/
    }

}

module.exports = views;