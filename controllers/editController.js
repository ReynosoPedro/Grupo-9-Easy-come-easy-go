const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const edit = {
    seleccion: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEditar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('formularioEdit',{vehiculoEditar})
    },

    edit: (req, res) => {
        // validacion img
        if(req.file!=undefined){
            console.log("llege acaaaaaa");
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //modifico el auto con los datos ingresados
        vehiculosDelArchivoJSON[req.params.id-1].nombre=(req.body.marca+" "+req.body.modelo);
        vehiculosDelArchivoJSON[req.params.id-1].año=req.body.year;
        vehiculosDelArchivoJSON[req.params.id-1].kilometraje=req.body.kilometraje;
        vehiculosDelArchivoJSON[req.params.id-1].precio=req.body.precio;
        vehiculosDelArchivoJSON[req.params.id-1].transmision=req.body.transmision;
        vehiculosDelArchivoJSON[req.params.id-1].imagen=req.file.filename;
        // no estoy seguro de si es necesario , 
        let nuevaLista=JSON.stringify( vehiculosDelArchivoJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),nuevaLista);
        res.render('productos',{vehiculos: vehiculosDelArchivoJSON});
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('home');
        }
        

    }  

        
}
        
module.exports = edit;