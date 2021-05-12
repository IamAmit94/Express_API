const express = require('express');
const app = express();

app.use(function(req, res, next){

    if(req.params === null){
        console.log('Enter the valid data')
    }

})