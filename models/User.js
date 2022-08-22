const fs = require ('fs');

const User ={
    fileName : './database/users.json',
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        /* db.Usuarios.findAll({
            include:[{association:"brands"}, {association:"models"}, {association:"categories"}, {association:"colors"}, {association:"years"}, {association:"km_intervals"}]
        })  */
    },
    generateId: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id +1;
        }
        return 1;
    },
    findAll: function(){
        return this.getData();
            /*
            .then(function(usuarios) {
                res.send({usuarios})
            })
            */

    },
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
        /*
        db.Usuarios.findOne({
            where: {
                id: req.params.id
            }
        })
        then(function(usuario) {
                res.send(,{usuario})
            })
        */


    },
    findByField: function (field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
        /*
        db.Usuarios.findOne({
            where: {
                field: text
            }
        })
        then(function(usuario) {
                res.send(,{usuario})
            })
        */

    },
    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
        /* 
            db.Usuarios.create({
                full_name: req.body.nombre-completo ,
                user: req.body.usuario ,
                password: bcryptjs.hashSync(req.body.password, 10) ,
                date_birth: req.body.fecha-de-nacimiento ,
                email: req.body.email ,
                phone: req.body.celular ,
                roll_id: 1,
                image: req.file.filename ,
                state: 1 ,
        })
        */

    },
    delete:function (idEliminar){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
        /* 
        db.Usuarios.destroy({
            where: {
                id: idEliminar
            }
        })
          */
    }
}

module.exports= User;

