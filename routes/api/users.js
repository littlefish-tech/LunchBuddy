const router = require("express").Router();
const usersController = require("../../controllers/usersController")
const passport = require('../../passport');

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

router
.route("/:id")
.get(usersController.findById);

// router
// .route("/:username")
// .get(usersController.findOne);

router.post(
    "/login",
    function(req, res, next){
        console.log("routes/api/users.js, login, req.body: ");
        console.log(req.body)
        next()
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in , req.user")
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo)
    }
)

module.exports = router;