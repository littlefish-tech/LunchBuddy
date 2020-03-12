const router = require("express").Router();
const usersController = require("../../controllers/usersController")

router.route("/users")
    .get(usersController.findAll)
    .post(usersController.create);

router
.route("/users/:id")
.get(usersController.findById);

module.exports = router;