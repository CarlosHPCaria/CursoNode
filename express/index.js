const express = require ("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/html/index.html")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog")
})

app.get("/ola/:cargo/:nome/:cor", function(req,res){
    res.send("<h1>ola "+req.params.nome+"</h1>"+
                "<h2>Seu Cargo é: "+req.params.cargo+"</h2>"+
                    "<h3>Sua Cor é: "+req.params.cor+"</h3>"
        );
})

app.listen(9090, function(){
    console.log("Servidor Rodando na url  http://localhost9090");
});
