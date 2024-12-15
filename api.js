const http=require('http');

http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type' : 'text/html'});

    const url= req.url;

    if(url==='/about'){
        res.write('Welcome to the page and my restaurant');
        res.end();
    }
    else if(url==='/contact'){
        res.write('Welcome to contact us page');
    }
    else if(url==='/myself'){
        res.write('Myself Md Sharjeel Farooqui a recent graduate from iiit bhopal ');
        res.end();
    }
    else{
        res.write('Hello This is Md Sharjeel Farooqui');
        res.end();
    }
}).listen(3000, function(){
    console.log("The server is running with server request");
});





