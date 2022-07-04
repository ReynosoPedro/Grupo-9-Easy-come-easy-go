const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const detalle = {
    detalle: (req, res) => {
        res.render('detalle',{vehiculo: vehiculosDelArchivoJSON[req.params.id-1]})
    }
}

module.exports = detalle