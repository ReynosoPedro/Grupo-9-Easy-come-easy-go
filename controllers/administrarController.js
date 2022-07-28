const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const administrador = {
    admin: (req, res) => {
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('detalleAdministrar' , {vehiculosDelArchivoJSON})
    }
}

module.exports = administrador