'use strict';
var through = require('through2');

var tr = through(function (buf, enc, callback) {
  this.push(buf.toString().toUpperCase());
  callback();
});

process.stdin.pipe(tr).pipe(process.stdout);
