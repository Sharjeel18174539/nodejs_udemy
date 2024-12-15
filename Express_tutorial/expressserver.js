const express= require('express');
const app=express();

app.get('/' , function(req, res){
    res.send('<html><head></head><body><h1>Hello coder</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({firstName : 'Sharjeel' , lastName : 'Farooqui'});
});

app.listen(3000, function(error){
    if(!error){
        console.log("port 3000 is running");
    }
    else{
        console.log("port 3000 is not running there is some error in the port");
    }
});