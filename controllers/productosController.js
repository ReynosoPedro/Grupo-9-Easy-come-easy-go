const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));


const productos = {
    productos: (req, res) => {
        res.render('productos',{vehiculos: vehiculosDelArchivoJSON})
    }
}

module.exports = productos;
