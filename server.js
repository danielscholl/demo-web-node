/// <reference path="typings/node/node.d.ts"/>

var http = require('http');
http.createServer(function(req, res) {
  console.log('Got request for ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.sen('<h1>Hello Code and Azure Web Apps!</h1>');
}).listen(process.env.PORT);

