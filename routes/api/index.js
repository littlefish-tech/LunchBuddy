const router = require("express").Router();
const lunchRoutes = require("./lunches");
const usersRoute = require("./users");
const usersLunches = require("./userLunches")


router.use("/lunches", lunchRoutes);
router.use("/users", usersRoute);
router.use("/userLunches", usersLunches);

//If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(_dirname, "../../client/build/index.html"));
});

module.exports = router;