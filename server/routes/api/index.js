const router = require("express").Router();
const bookRoutes = require("./bookRoutes");

router.use("/bookRoutes", bookRoutes);

module.exports = router;