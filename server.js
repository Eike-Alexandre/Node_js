var http = require('http'); //cria o servidor
var fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data) {//err data para abrir arquivos, data dados do arquivo
        res.writeHead(200, { 'content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });

}).listen(80); 

// fs - file sistem