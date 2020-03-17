const express = require("express");
var isAuthenticated = require("./config/middleware/isAuthenticated");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const session = require('express-session');
var passport = require("./config/passport");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
// require("./routes/api/login-routes")(app);

//routes for testing

app.get("/", function(req, res){
  console.log("test");
  if(req.user){
      res.redirect("/lunchbuddy");
  }
  res.redirect("/signup");
});
app.get("/login", function(req, res){
  if(req.user){
      res.redirect("/lunchbuddy");
  }
  res.redirect("/login");
});

app.get("/lunchbuddy", isAuthenticated, function (req, res){
  res.redirect("/lunchbuddy");
});

app.get("/user", function(req, res){
  res.send(req.user);
});


//api

app.post("/api/login", passport.authenticate("local"), function(req, res){
  res.json(req.user);
});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});

// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

// app.post("/api/lunches", function(req, res) {
//   console.log(req);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lunchbuddymongo");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});