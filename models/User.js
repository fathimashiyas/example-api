const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please add name']
    },
    email : {
        type : String,
        required : [true,'Please add an email'],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please add a valid email']
    },
    password:{
        type:String,
        required:[true,'Please add password'],
        minlength:6,
        maxlength:15,
        select:false
    }
});

//Encrypt the password using bcrypt
UserSchema.pre('save', async function(next)
{
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password,salt);
});

//sign JWT and return token
UserSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    });
}

//Match user enterd password and encrypted password from table
UserSchema.methods.matchPassword = async function(enteredPassword,password)
{
    try
    {
        return await bcrypt.compareSync(enteredPassword,this.password);
    }
    catch(err)
    {
        return res.status(400).send(next);
    }
}

module.exports = mongoose.model('User',UserSchema);