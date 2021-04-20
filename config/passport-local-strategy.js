
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/userSchema');

passport.use(new LocalStrategy({
        usernameField : 'email'
    },
    function(email, password, done){
        //find user and establish identity
        User.findOne({email : email}, function(err, user){
            if(err){
                console.log("error in finding user");
                return done(err);
            }
            
            if(!user || user.password != password){
                console.log("invalid username/password");
                return done(null, false);
            }
            console.log("done");
            return done(null, user);
        });
    })
);

passport.serializeUser(function(user, done){
    console.log("Serializing");
    done(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("error in finding ---> des");
            return done(err);
        }
        return done(null, user);
    })
});

passport.checkAuthentication = function(req, res, next){
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        return next();
    }
    console.log("unauthorised access"); 
    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req, res, next){

    // res.user is obtained from passport which has curr signed in user info from session cookie
    // we are just sending this to locals for views
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;

