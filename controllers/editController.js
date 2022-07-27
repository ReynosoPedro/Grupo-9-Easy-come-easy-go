const path =require('path');
const fs = require('fs');

let vehiculosDelArchivoJSON=
JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const edit ={
    index: (req, res) => {
        let vehiculos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/vehiculos.json')));
        res.render(path.resolve(__dirname, '../views/formularioEdicion'), {vehiculos});
    },
    seleccion: (req, res) => {
        const vId=req.params.id;
        let archivoV = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEditar= archivoV.find(vehiculo=>vehiculo.id==vId);
        console.log(vehiculoEditar);
        res.render('formularioEdit',{vehiculoEditar})
    },
    edit: (req, res) => {

        if(req.file!=undefined){
        let vehiculosDelArchivoJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

        vehiculosDelArchivoJSON[req.params.id-1].nombre=(req.body.marca+" "+req.body.modelo);
        vehiculosDelArchivoJSON[req.params.id-1].año=req.body.year;
        vehiculosDelArchivoJSON[req.params.id-1].kilometraje=req.body.kilometraje;
        vehiculosDelArchivoJSON[req.params.id-1].precio=req.body.precio;
        vehiculosDelArchivoJSON[req.params.id-1].transmision=req.body.transmision;
        vehiculosDelArchivoJSON[req.params.id-1].imagen=req.file.filename;

        let nuevaLista=JSON.stringify( vehiculosDelArchivoJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),nuevaLista);
        res.redirect("/productos");

        }else {
        res.render('error imagen');
        }
    } 
        
}
        
module.exports = edit;