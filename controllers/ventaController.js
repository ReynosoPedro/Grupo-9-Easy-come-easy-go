const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
const venta = {
    seleccion: (req, res) => {
        res.render('formularioVenta')
    },
    crear: (req, res) => {
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
        res.redirect("/productos");
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('formularioVenta');
        }
        

    }  

}

module.exports = venta;