const express = require('express');
const port = 8000;

const app = express();
const routes = require('./routes/index.js');

app.use('/', routes);
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log("Error starting server ", err);
        return;
    }
    console.log("Server running succesfully at ", port);
});

