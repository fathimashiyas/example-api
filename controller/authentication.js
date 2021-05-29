//User Models
const User = require("../models/User");

// User registration e.g. http://localhost:3000/api/posts/register
exports.register = async (req,res,next) =>
{
    try {
        const {name,email,password} = req.body;

        //Check the user is already exist
        const userExist = await User.findOne({email}).select('+password');
        if(userExist)
        {
            return res.status(409).send('The user is already exist. Please login');
        }

        //Create user
        const user = await User.create({
            name,
            email,
            password
        });
        
        //Send authentication token with cookie
        sendTokenWithCookie(user,200,res);
      } catch (err) {
        return next(err);
      }
}

// User Login e.g. http://localhost:3000/api/posts/login
exports.login = async (req,res,next) =>
{
    try {
        const {email,password} = req.body;

        //validate email and password
        if(!email && !password)
        {
            return res.status(400).send('Please provide email and password');
        }
        if(!email)
        {
            return res.status(400).send('Please provide email');
        }
        if(!password)
        {
            return res.status(400).send('Please provide password');
        }
        //Check the user is exist or not
        const user = await User.findOne({email}).select('+password');
        if(!user)
        {
            return res.status(401).send('The user is not exist. Please register');
        }
        //Check the password is correct or not
        const isMatch = user.matchPassword(password,this.password);
        if(!isMatch)
        {
          return res.status(401).send('Invalid credentails');
        }
        
        //Send authentication token with cookie
        sendTokenWithCookie(user,200,res);

    } catch (err) {
        return next(err);
    }
}

// User logout e.g. http://localhost:3000/api/posts/logout
exports.logout = async (req,res,next) =>
{
    console.log("Inside logout");
    try {
        //Empty the token
        res.clearCookie('token');
        console.log(res.cookie);
        res
        .status(200)
        .json({
        success : true,
        message: "Successfully logged out"
      });
      } catch (err) {
        return next(err);
      }
}

//send token with cookie
const sendTokenWithCookie = (user,statusCose,res) =>
  {
    try{
      //Create the token
      const token = user.getSignedJwtToken();

      //Set cookie
      const cookieData = {
        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
      
      res
        .status(200)
        .cookie('token',token,cookieData)
        .json({
        success : true,
        token
      });
    }
    catch(err)
    {
      return next(err);
    }
}