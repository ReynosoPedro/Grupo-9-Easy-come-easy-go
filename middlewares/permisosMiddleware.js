function permisosMiddleware(req, res, next) {
	if (req.session.userLogged==undefined || req.session.userLogged.rol!=9) {
		return res.redirect('/');
	}	
	next();
}

module.exports = permisosMiddleware;



