var http = require('http'); 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'test/html'});
    res.write('<h2>Aprendendo node.js</h2> <br>');
    res.write(Date().substring(16,24)+'<br>');
    res.write('Brasil 2 x 1 Suiça \n');
    res.end('Bom dia!');

}).listen(3000);  // localhost : Nº da porta

