
const db = require('../database/models');

function DeleteEditMiddleware(req, res, next) {
	if (req.session.userLogged==undefined) {
		return res.redirect('/login');
	}
	db.Productos.findByPk(req.params.id)
	.then(function(vehiculo){
		if(req.session.userLogged.email!=vehiculo.name){
			return res.redirect('/login');
		}else {
			next();
		}
	})
	
}

module.exports = DeleteEditMiddleware;
