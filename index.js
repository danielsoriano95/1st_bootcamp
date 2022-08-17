var express=require('express');
var app=express();
var path=require('path');
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));



app.post("/login", function(req, res){
    //console.log("Dato recibido");
    var nom=req.body.nombre; // capturar dato enviado desde el formulario
    console.log(nom); 
    var ape=req.body.apellido; // capturar dato enviado desde el formulario
    console.log(ape); 
    res.send("gracias por enviarnos tu nombre");
    res.send("gracias por enviarnos tu nombre");
});

app.listen(3000)


