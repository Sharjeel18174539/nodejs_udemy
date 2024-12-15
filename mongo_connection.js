const express= require('express');
const mongoose= require('mongoose');

const app= express();

mongoose.connect('mongodb://localhost:27017/sharjeeldb')

app.listen(3001, function(){
    console.log("running.....");
});