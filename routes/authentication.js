const router = require("express").Router();

const {register,login,logout} = require("../controller/authentication");

//Routes for authentication
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;