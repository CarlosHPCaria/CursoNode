var http = require ('http');

http.createServer(function(req, res){
    res.end("Ola")
}).listen(9090);

console.log("O servidor esta rodando")