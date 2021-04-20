

module.exports.profile = function(req, res){
    return res.render('profile.ejs', {title : 'User Profile'});
}

module.exports.destroySession = function(req, res) {
    req.logout();
    return res.redirect('/');
}


