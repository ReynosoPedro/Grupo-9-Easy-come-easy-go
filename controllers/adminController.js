const path = require('path');
const fs = require('fs');
let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));

const admin = {
    panel: (req, res) => {
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('admin/detalleAdministrar' , {vehiculosDelArchivoJSON})
    },
    formCrear: (req, res) => {
        res.render('admin/formularioVenta')
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
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('admin/formularioVenta');
        }
        

    },    formEdit: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEditar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('admin/formularioEdit',{vehiculoEditar})
    },

    edit: (req, res) => {
        // validacion img
        if(req.file!=undefined){
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
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
          //en caso de que la validacion de img sea negativa , vuelve al formulario
        }else {
            res.render('views/home');
        }
        

    }  ,    formDelete: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        let vehiculoEliminar= archivoV.find(vehiculo=>vehiculo.id==vId);
        res.render('admin/formularioDelete',{vehiculoEliminar})
    },
    delete: (req, res) => {
        const vId=req.params.id;
        let archivoV =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        //elimino el auto con los datos ingresados
        let listaFinal= archivoV.filter(vehiculo=>vehiculo.id!=vId);
        // no estoy seguro de si es necesario , 
        listaFinal=JSON.stringify(listaFinal);
        fs.writeFileSync(path.resolve(__dirname,'..','database','vehiculos.json'),listaFinal);
        let vehiculosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','vehiculos.json')));
        res.render('views/productos',{vehiculos: vehiculosDelArchivoJSON});
    
    }


}

module.exports = admin