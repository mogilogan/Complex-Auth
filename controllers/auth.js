<<<<<<< HEAD
exports.register = (req,res, next) =>{
    res.send("Register Route");
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
=======
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
    res.send("Reset password ROute");
};
>>>>>>> 8a9d2eb1c84c9240b37b1b38031781a1d9ee28c8
