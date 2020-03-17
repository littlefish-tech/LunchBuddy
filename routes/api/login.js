
const router = require("express").Router();
const lunchesController = require("../../controllers/lunchesController");
var isAuthenticated = require("../../config/middleware/isAuthenticated");
var passport = require("../../config/passport");


    //HTML---------------------------------------------

    //hint: this route makes more sense in brem
    router.route("/")
        .get( function(req, res){
            console.log("test");
            if(req.user){
                res.redirect("/lunchbuddy");
            }
            res.redirect("/signup");
        });

    router.route("/login")
        .get(function(){
            if(req.user){
                res.redirect("/lunchbuddy");
            }
            res.redirect("/login");
        });    

    router.route("/lunchbuddy")
        .get(isAuthenticated, function(req, res){
            res.redirect("/lunchbuddy");
        });

    // app.get("/user", function(req, res){
    //     res.send(req.user);
    // });

    //API------------------------------------------------

    router.route("/user")
        .post(passport.authenticate("local"), function(){
            res.json(req.user);
        });


    // app.get("/logout", function(req,res){
    //     req.logout();
    //     res.redirect("/");
    // });

    module.exports = router;