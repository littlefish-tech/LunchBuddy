const router = require("express").Router();
const lunchesController = require("../../controllers/lunchesController");

router.route("/")
    .get(lunchesController.findAll)
    .post(lunchesController.create);

    module.exports = router;