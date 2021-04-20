const express = require('express');
const port = 8000;
const app = express();
const db = require("./config/mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store session cookie in DB
app.use(session({
    name : 'website',
    secret : 'something',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store : MongoStore.create({
                mongoUrl : 'mongodb://localhost/social_db',
                autoRemove : 'disabled'
            })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/index.js'));

app.listen(port, function(err){
    if(err){
        console.log("Error starting server ", err);
        return;
    }
    console.log("Server running succesfully at ", port);
});

