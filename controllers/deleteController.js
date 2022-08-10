const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
const edit = {
    seleccion: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEliminar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('formularioDelete',{vehiculoEliminar})
    },
    delete: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //elimino el auto con los datos ingresados
        let listaFinal= archivoV.filter(vehiculo=>vehiculo.id!=vId);
        // no estoy seguro de si es necesario , 
        listaFinal=JSON.stringify(listaFinal);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),listaFinal);
        res.redirect("/productos");
    
    }  

}

module.exports = edit;

