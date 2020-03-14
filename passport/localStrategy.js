<<<<<<< HEAD
const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
=======
const User = require('../models/users')
const LocalStrategy = require('passport-local').Strategy

//use local strategy to locally save to db: usernames and passwords
const strategy = new LocalStrategy(
	{
		usernameField: 'username' // default username
>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
	},
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

<<<<<<< HEAD
module.exports = strategy
=======
module.exports = strategy
>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
