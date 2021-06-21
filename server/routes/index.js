const router = require("express").Router();
const apiRoutes = require("./api");
const searchRoutes = require("./googleBooksRoutes");

router.use("/api", apiRoutes);
router.use("/search", searchRoutes);

module.exports = router;