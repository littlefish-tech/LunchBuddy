const router = require("express").Router();
const lunchRoutes = require("./lunches");

router.use("/lunches", lunchRoutes);

//If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(_dirname, "../../client/build/index.html"));
});

module.exports = router;