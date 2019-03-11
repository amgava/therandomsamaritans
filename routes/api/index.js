const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");

// Book routes
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;