const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
const venta = {
    seleccion: (req, res) => {
        res.render('formularioVenta')
    },
    crear: (req, res) => {
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let nuevoAuto={
        id: (vehiculosDelArchivoJSON.length+1),
        nombre: (req.body.marca+" "+req.body.modelo),
        año: req.body.año,
        kilometraje:req.body.kilometraje,
        precio: req.body.precio,
        transmision: req.body.transmision,
        imagen:null,
        } 
        console.log(nuevoAuto);
        vehiculosDelArchivoJSON.push(nuevoAuto);
        let nuevaLista=JSON.stringify( vehiculosDelArchivoJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),nuevaLista);
        res.redirect("/productos");

    }  

}

module.exports = venta;