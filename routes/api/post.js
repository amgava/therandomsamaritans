const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

<<<<<<< HEAD
// Matches with "/api/posts/:id"
router
 // .route("/:category")
 // .get(postController.findByCat)
 .put(postController.update)
=======
// Matches with "/api/post/:id"
router.route("/:id")
  .get(postController.findById)
 // .put(postController.update)
>>>>>>> 47b7f91239edee1731ebbd77029df2af2e18264f
 // .delete(postController.remove);

module.exports = router;