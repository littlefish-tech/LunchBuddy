const router = require("express").Router();
const lunchRoutes = require("./lunches");

router.use("/lunches", lunchRoutes);

module.exports = router;