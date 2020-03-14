const passport = require('passport')
const LocalStrategy = require('./localStrategy')
<<<<<<< HEAD
const User = require('../database/models/user')
=======
const User = require('../models/userPassport')

>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
<<<<<<< HEAD
	console.log(user) // the whole raw user object!
=======
	console.log(user) 
>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

<<<<<<< HEAD
module.exports = passport
=======
module.exports = passport
>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
