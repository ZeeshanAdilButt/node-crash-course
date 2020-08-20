const express = require('express')

const app = express();

app.get('/', function(req,res){
    res.send("hello world");
})

app.get('/alien', function(req,res){
    const id = req.query.id;

    res.send("wecome to the world " + id);
})

app.get('/alien/:id', function(req,res){
    const id = req.params.id;
    res.send("wecome to the worldsss " + id);
})

app.get('/alien/:id', function(req,res){
    const id = req.params.id;
    res.send("wecome to the worldsss " + id);
})

app.listen(9000, function(req,res){

    console.log("crash course app working");
})