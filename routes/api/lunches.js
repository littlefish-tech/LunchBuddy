const router = require("express").Router();
const lunchesController = require("../../controllers/lunchesController");

router.route("/")
    .get(lunchesController.findAll)
    .post(lunchesController.create);

    router
    .route("/:id")
    .get(lunchesController.findById)
    // .put(lunchesController.update)
    .delete(lunchesController.remove);

    module.exports = router;