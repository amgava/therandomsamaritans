const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/Users"
router.route("/")
  .get(userController.findById)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
 // .put(userController.update)
  .delete(userController.remove);

module.exports = router;