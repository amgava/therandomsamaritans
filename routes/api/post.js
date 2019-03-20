const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/posts/:id"
//router
 // .route("/:category")
 // .get(postController.findByCat)
 // .put(postController.update)
 // .delete(postController.remove);

module.exports = router;