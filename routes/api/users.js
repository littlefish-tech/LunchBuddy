const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const db = require("../../models");
const passport = require("../../config/passport");

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

router
.route("/:id")
.get(usersController.findById);

module.exports = router;