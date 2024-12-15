const express = require('express');
const app=express();

app.get('/', function(req, res){
    res.send('single callback function')
}).listen(3000, function(){
    console.log('Port 3000 is running !')
});