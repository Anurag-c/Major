
const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);

router.post('/sign-in', passport.authenticate(
    'local', 
    {failureRedirect : '/'}
), homeController.createSession);

router.post('/sign-up', homeController.create);

router.use('/users', require('./users'));

module.exports = router;