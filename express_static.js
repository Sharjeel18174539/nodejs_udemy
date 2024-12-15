const express=require('express');
const app=express();

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello coder</h1></body></html>')
});

app.listen(3000, function(){
    console.log("port 3000 is running ");
})