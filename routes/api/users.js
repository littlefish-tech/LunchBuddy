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

router.route("/", (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION

    .post((usersController.findOne(

        { username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new User({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        }


    )))
    
})

module.exports = router;

// .post((usersController.findOne