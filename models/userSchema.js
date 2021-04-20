// require the Library
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        lowercase : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User; 