var http= require('http');
var fs=require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'Application/json'});

    var obj={
        firtName:'Sharjeel',
        lastName: 'Farooqui'
    }

    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');

console.log("Port is live ");