var express = require("express");
var routeur = express.Router();
const twig = require("twig");

routeur.get("/",(req,res)=>{
    res.render("accueil.html.twig");
    });
    
    routeur.get("/meher",function(req,res){
        res.send("hello Meher arbi");
        });
    
    routeur.use((request,response,suite)=>{
        const error = new Error("Page not found");
        error.statuts=404;
        suite(error);
    })  
    routeur.use((request,response,error)=>{
        response.status(error.status || 500 );
        response.end(error.message);
    } )
    module.exports=routeur;