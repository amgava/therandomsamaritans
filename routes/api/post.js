const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/books"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/books/:id"
router
  .route("/:category")
  .get(postController.findByCat)
 // .put(postController.update)
 // .delete(postController.remove);

module.exports = router;