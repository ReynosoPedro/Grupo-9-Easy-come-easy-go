const path = require('path');
const fs = require('fs');
let listaVehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','car-list.json')));
const venta = {
    seleccion: (req, res) => {
        res.render('formularioVenta',{modelos: listaVehiculosDelArchivoJSON})
    }
}

module.exports = venta;