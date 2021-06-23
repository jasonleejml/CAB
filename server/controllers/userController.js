const bcrypt = require('bcryptjs');
const User = require('../models/userModel');


const userController = {};


userController.createUser = (req, res, next) => {
	const { username, password } = req.body;
	
	if (!username || !password)
		return res.render('../client/signup', {
			error: 'Missing username or password',
		});

	
	bcrypt.hash(password, 10, (err, hash) => {
		if (err) {
			return next('Error in userController.createUser: ' + JSON.stringify(err));
		} else {
			User.create({ username, password: hash })
				.then((user) => {
					res.locals.user = user;
					return next();
				})
				.catch((err) => res.render('../client/signup', { error: err }));
		}
	});
};


userController.verifyUser = (req, res, next) => {
	
	const { username, password } = req.body;
	if (!username || !password)
		return next('Missing username or password in userController.verifyUser.');

	User.findOne({ username })
		.exec()
		.then((user) => {
			if (user === null) return res.redirect('/signup');
			bcrypt.compare(password, user.password).then((result) => {
				if (!result) return res.redirect('/signup');
				res.locals.user = user;
				return next();
			});
		})
		.catch((err) =>
			next('Error in userController.verifyUser: ' + JSON.stringify(err))
		);
};

module.exports = userController;