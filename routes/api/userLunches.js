const router = require("express").Router();
const userLunchesController = require("../../controllers/userLunchesController")

router.route("/userLunches")
    .get(userLunchesController.findAll)
    .post(userLunchesController.create);

router
    .route("/userLunches/:id")
    .get(userLunchesController.findById)
    .delete(userLunchesController.remove)