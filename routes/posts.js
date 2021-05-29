const router = require("express").Router();

const { getAllPost,getPostBySlug,createMultiplePost} = require("../controller/posts");

//Authentication validation middleware
const { protect }= require("../middleware/authentication");

//Routs to create and get the posts
router.route("/").get(protect,getAllPost);
router.route("/:slug").get(protect,getPostBySlug);
router.route("/createposts").post(createMultiplePost);

module.exports = router;
