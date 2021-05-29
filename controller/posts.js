// Models
const Posts = require("../models/Post");

//Get all post . access is only for authenicated users
//http://localhost:3000/api/posts
exports.getAllPost = async (req,res,next) =>
{
    try {
        const post = await Posts.find();
        
        res.send(post);
      } catch (err) {
        return next(err);
      }
}

//Get the post by slug. access is only for authenticated user
//http://localhost:3000/api/posts/first-post
exports.getPostBySlug = async (req,res,next) =>
{
    const { slug } = req.params;

  try {
    const post = await Posts.find({ slug: slug });

    res.send(post);
  } catch (err) {
    return next(err);
  }
}


//Create multiple post. Access is public
//http://localhost:3000/api/posts/createposts
exports.createMultiplePost = async (req,res,next) =>
{
    try {
        const post = await Posts.insertMany(req.body)
        res.status(201).json({
          success : true,
          data : post
        });
        res.send();
      } catch (err) {
        return next(err);
      }
}