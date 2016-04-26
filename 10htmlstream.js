'use strict';

var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();

stream.pipe(through(function (buf, enc, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(stream);
