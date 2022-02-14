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
    res.send("Reset password ROute");
};