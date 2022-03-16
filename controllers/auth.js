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

exports.login= async (req,res, next) =>{
    const { email, password} =  req.body;

    if(!email || !password){
        res.status(400).json({success : false,error:"Provide email and password"})
    }

    try {
        const user = await User.findOne({email}).select("+password");

        if(!user){
           return res.status(404).json({success:false,error:"Invalid credentials"})
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            return res.status(404).json({success: false,error:"Invalid credentials"})
        }

        res.status(200).json({
            success: true,
            token: "dsfsdfsd4f",
        });
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
