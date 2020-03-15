const router = require("express").Router();
const usersController = require("../../controllers/usersController")

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

router
.route("/:id")
.get(usersController.findById);

// router
// .router("/:users")
// .get(usersController.findOne);


module.exports = router;