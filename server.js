/// <reference path="typings/node/node.d.ts"/>

var http = require('http');
var os = require('os');
var port = process.env.PORT || 80;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World\n');
  response.write('Hostname: ' + os.hostname() + '\n');
  response.end('Node Version: ' + process.env.NODE_VERSION + '\n');
});

server.listen(port)

console.log('Server running at http://localhost:' + port)