'use strict';
var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
  if(req.method == 'POST') {
    req.pipe(through(function(buf, enc, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })).pipe(res);
  }
  else {
    return res.end('send me a POST\n');
  }
});

server.listen(parseInt(process.argv[2]));
