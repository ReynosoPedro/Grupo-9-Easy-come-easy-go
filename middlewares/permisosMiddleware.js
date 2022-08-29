function permisosMiddleware(req, res, next) {
	if (req.session.userLogged==undefined  ) {
		return res.redirect('/');
	}	
	next();
}

module.exports = permisosMiddleware;



