
const User = require('../models/userSchema');

module.exports.home = function(req, res){
    if(req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('home.ejs', {title : 'Home'});
}

module.exports.createSession = function(req, res){
    return res.redirect('/users/profile');
}

module.exports.create = function(req, res){
    
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/');
            })
        }else{
            console.log('User already exists');
            return res.redirect('back');
        }

    });
}