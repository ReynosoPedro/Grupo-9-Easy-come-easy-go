const path = require('path');
const fs = require('fs');
const vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const views = {
    home: (req, res) => {
        res.render('views/home',{vehiculos: vehiculosDelArchivoJSON})
    },
    productos: (req, res) => {
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON})
    },
    detalle: (req, res) => {
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/detalle',{vehiculos: vehiculosDelArchivoJSON[req.params.id-1]})
    }

}

module.exports = views;