
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/user_controller");
const passport = require('passport');

router.get('/profile',  passport.checkAuthentication , usersController.profile);
router.get('/sign-out', usersController.destroySession);
module.exports = router;