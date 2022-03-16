<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const {register,login,forgotpassword,resetpassword} = require('../controllers/auth')

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);


=======
const express = require('express');
const router = express.Router();

const {register,login,forgotpassword,resetpassword} = require('../controllers/auth')

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);


>>>>>>> 8a9d2eb1c84c9240b37b1b38031781a1d9ee28c8
module.exports = router;