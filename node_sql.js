const express= require('express');
const app =express();
const mysql= require('mysql');



    var db=mysql.createConnection({
        host: "Local Instance",
        user: "root",
        password: "Sharjeel@123",
        database: "sakila"
    });



    app.get('/', function(req, res){
        const sql= "select age from  student where age>19";
        db.query(sql, (err, data)=>{
            if(err) return res.json("Error");
            return res.json(data);
        })
    })


app.listen(3000, function(){
    console.log("Running");
});



