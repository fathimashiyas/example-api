//Models
const User = require("../models/User");

//Error handler middleware
const errorHandler = require("./errorHandler");

//Token
const jwt = require('jsonwebtoken');

//Check the authorization
exports.protect = async (req,res,next) =>
{
    try
   {
        let token;

        if(req.headers.authorization)
        {
            token = req.headers.authorization;
        }
        else if (req.cookies.token)
        {
            token = req.cookies.token;
        }
        console.log("fasfasfsaf"+token);
        if(!token)
        {
            return res.status(401).send('Not authorised to access');
        }
        //Decoding the token
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);

        //Extracxt the id from decoded value and check the id is exist in db
        req.user = await User.findById(decodedToken.id);
        next();
   }
   catch(err)
   {
       return res.status(401).send('Not authorised to access');
   }
}