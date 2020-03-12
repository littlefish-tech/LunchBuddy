const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
//for auth
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//XXXXXXXXX_AUTHENTICATIO_NXXXXXXX

//Add route for login/signup/auth
const user = require('./routes/authUsers')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
require("./passport")
app.use(passport.session()) // calls the deserializeUser

// Routes For Auth
app.use('/user', user)
//XXXXXXXXX_END_OF_AUTHENTICATION_XXXXXXX

// app.post("/api/lunches", function(req, res) {
//   console.log(req);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lunchbuddymongo");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});