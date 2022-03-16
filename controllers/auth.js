const User = require('../models/User.js');

exports.register = async(req,res, next) =>{
    const {username , email, password} = req.body;
try {
    const user = await User.create({
        username, email, password
    });
    res.status(200).json({
        success: true,
        user
    });
} catch (error) {
    res.status(500).json({
        success: false,
        error: error.message,
     
    });
}
};

exports.login= (req,res, next) =>{
    res.send("login Route");
};

exports.forgotpassword = (req,res, next) =>{
    res.send("Forgot password ROute");
};

exports.resetpassword = (req,res, next) =>{
    res.send("Reset password ROuteokkkkk");
};
