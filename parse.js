var url = require('url');
var adr = 'http://localhost:8080/index.html?ano=2022&mes=Dezembro';
var q =url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); // index.html
console.log(q.search); // ?ano=2022&mes=Dezembro

var qdata = q.query; // retorna como objeto ano: 2022 mes: dez
console.log(qdata.mes) //'dezembro