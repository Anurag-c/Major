// require the Library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/social_db');

// aquire the connection to check if it is successful
const db = mongoose.connection;  

// error
db.on('error', console.error.bind(console, 'Error connecting to Database'));

// success
db.once('open', function(){
    console.log('Successfully connected to Database');
});

module.exports = db;