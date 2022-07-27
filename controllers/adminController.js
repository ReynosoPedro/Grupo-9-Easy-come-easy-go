const path =require('path');
const fs = require('fs');


module.exports = {
    index: (req, res) =>{
        let vehiculos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/vehiculos.json')));
        res.render(path.resolve(__dirname, '../views/formularioEdicion'), {vehiculos});
    }


}