
var http = require('http');
var url =require('url');

http.createServer (function(req,res) {
    res.writeHead(200, {'content-type': 'text/htm'});
    var q = url.parse(req.url, true).query;
    var txt = "<br>dia:" + q.dia + "<br>mes:" + q.mes + "<br> ano: "+q.ano;
    res.end(txt);
}).listen(80);