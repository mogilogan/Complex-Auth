const User = require('../models/User.js');
const ErrorResponse = require("../utils/errorResponse.js")

exports.register = async(req,res, next) =>{
    const {username , email, password} = req.body;
try {
    const user = await User.create({
        username, email, password
    });
    res.status(201).json({
        success: true,
        token: '"2sdf7sdf'
    });

    sendToken(user, 201, res);
} catch (error) {
    next(error);
}
};

exports.login= async (req,res, next) =>{
    const { email, password} =  req.body;

    if(!email || !password){
        return next(new ErrorResponse("Please provide and email and password",400))
    }

    try {
        const user = await User.findOne({email}).select("+password");

        if(!user){
            return next(new ErrorResponse("Invalid credentials",404))
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            return next(new ErrorResponse("Invalid credentials",401))
        }

        sendToken(user,200, res);
    } catch (error) {
        res.status(500).json({success: false,error: error.message})
    }
};

exports.forgotpassword = (req,res, next) =>{
    res.send("Forgot password ROute");
};

exports.resetpassword = (req,res, next) =>{
    res.send("Reset password ROuteokkkkk");
};

const sendToken = (user, statusCode, res) =>{
    const token = user.getSignedToken();
    res.status(statusCode).json({success:true,token});
}
