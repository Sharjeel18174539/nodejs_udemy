const http= require('http');
const fs= require('fs');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'});
    const url=req.url;
    if(url==='/hotel'){
        res.write('Welcome to our Hotel');
        res.end();
    }
    else if(url==='/order'){
        var obj={
            menu:"4",
            veg:"Daal Fry ",
            nonVeg:"Chicken Butter ",
            sabzi:"Paneer masala ",
            roti:"Rumali Roti "
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
    else if(url==='/menu'){
        var html = fs.readFileSync('./index2.html',
            { encoding: 'utf8', flag: 'r' });
        res.write(html);
        res.end();    
    }
    else{
        res.write("This is Md Sharjeel Farooqui, The Hotel Manager");
        res.end();
    }
}).listen(3000, function(){
    console.log("Server 3000 is running");
});