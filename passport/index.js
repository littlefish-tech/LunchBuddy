const passport = require('passport')
// const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

//google strategy 
passport.serializeUser(function(user, done) {
	done(null, user);
   });
   
   passport.deserializeUser(function(user, done) {
	done(null, user);

   });
   
   passport.use(
	new GoogleStrategy(
	 {
	  clientID: "111958886582-omi90b5s9kmugc98ibtlhm94357edth8.apps.googleusercontent.com",
	  clientSecret: "0ep-KGJUUiapPMj66PEd86k_",
	  callbackURL: "http://localhost:3000/auth/google/callback"
	 },
	 function(accessToken, refreshToken, profile, done) {
	  var userData = {
	   email: profile.emails[0].value,
	   name: profile.displayName,
	   token: accessToken
	  };
	  done(null, userData);
	 }
	)
   );

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) 
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
//passport.use(LocalStrategy)

module.exports = passport
