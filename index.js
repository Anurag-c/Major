const express = require('express');
const port = 8000;

const app = express();


app.listen(port, function(err){
    if(err){
        console.log("Error starting server ", err);
        return;
    }
    console.log("Server running succesfully at ", port);
});