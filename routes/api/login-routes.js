
var isAuthenticated = require("../../config/middleware/isAuthenticated");
var passport = require("../../config/passport");

module.exports = function(app){

    //html
    app.get("/test", function(req, res){
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

};