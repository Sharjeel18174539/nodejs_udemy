var http=require('http');
var fs=require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('./index.html',
        { encoding: 'utf8', flag: 'r' });
    res.end(html);
}).listen(1337, '127.0.0.1');

console.log('port 1337 is running : ')